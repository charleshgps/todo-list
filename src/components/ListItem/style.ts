import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>(
    `
  display: flex;
  background-color: #03484c;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  border: 5px solid rgba(15, 104, 75, 0.6);
  border-radius: 0px 20px 20px 20px;

  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label {
    color: #fff;
    text-decoration: ${done ? "line-through" : "initial"};
  }
`
));

/*.color1 { #53ac59 };
.color2 { #3b8952 };
.color3 { #0f684b };
.color4 { #03484c };
.color5 { #1c232e };*/
