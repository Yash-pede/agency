"use client";
import { title } from "@/components/primitives";
import { cute, ekbaat, shy } from "@/public/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";
import React from "react";

const Love = () => {
  const [name, setName] = React.useState<string>("");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [noButtonPosition, setNoButtonPosition] = React.useState({
    top: "70%",
    left: "52%",
  });
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const inputElement = (e.target as HTMLFormElement).elements.namedItem(
            "yourname"
          ) as HTMLInputElement;
          setName(inputElement?.value || "");
        }}
        className={`space-y-10 flex flex-col justify-center items-center ${
          name ? "hidden" : ""
        }`}
      >
        <h2 className={title()}>What&apos;s your name Beautifull ??</h2>
        <Image
          src={ekbaat}
          alt={name}
          width={400}
          height={400}
          className="w-60 h-auto"
        />
        <Input
          type="text"
          name="yourname"
          label="The most beautiful person"
          placeholder="Your name"
        />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
      <section
        className={`space-y-10 flex flex-col justify-center items-center ${
          name ? "" : "hidden"
        }`}
      >
        <h2 className={title()}>Will you go with me on a Date {name}? </h2>
        <Image
          src={cute}
          alt={name}
          width={400}
          height={400}
          className=" h-auto"
        />

        <ButtonGroup className="">
          <Button onPress={onOpen} color="success" className="">
            Yes
          </Button>
          <Button
            color="danger"
            className="absolute "
            onPointerEnter={() => {
              const randomTop = `${Math.random() * 100}%`;
              const randomLeft = `${Math.random() * 100}%`;
              setNoButtonPosition({ top: randomTop, left: randomLeft });
            }}
            style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
          >
            No
          </Button>
        </ButtonGroup>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onclose) => (
              <>
                <ModalHeader className="text-rose-500">
                  Hurray you won a date with me !!
                </ModalHeader>
                <ModalBody>
                  <p className="text-center font-extrabold text-2xl">
                    I love you {name}{" "}
                    <span className="animate-pulse text-primary text-3xl">
                      💗
                    </span>{" "}
                  </p>
                  <Image
                    src={shy}
                    alt={name}
                    width={400}
                    height={400}
                    className=" h-auto"
                  />

                  <p className="text-center text-xs text-foreground-400">
                    call me!!!!
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onclose}>
                    baad me chalee
                  </Button>
                  <Button color="primary" onPress={onclose}>
                    milte h then
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        <Button
          onClick={() => {
            setName("");
          }}
          color="primary"
        >
          Try again
        </Button>
      </section>
    </>
  );
};

export default Love;
