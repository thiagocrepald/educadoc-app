import React, { useMemo } from "react";
import { Container } from "./styles";
import { MessageContainer } from "./Components";

interface DataProps {
  data: {} | any;
};

export function Messages({ data }: DataProps) {
  const messages = useMemo(
    () => ["text1", "text2", "text3", "text4", "text5"],
    []
  );

  return (
    <Container>
      {data.system && true ? (
        <>
          {messages.map((text) => (
            <MessageContainer
              key={text}
              text={data[text]}
              data={data}
              photo={data?.photo}
            />
          ))}
        </>
      ) : (
        <>
          <MessageContainer photo={data?.photo} text={data.text} data={data} />
        </>
      )}
    </Container>
  );
}
