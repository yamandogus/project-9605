import styled from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 1em;
  border-radius: 0 10px 10px 0;
  &:hover{
    background-color: #BF4F74;
    color: white;
  }
`

export const Li = styled.li`
background-color: white;
border-radius: 10px;
width: 80%;
height: 40px;
margin-bottom: 5px;
padding: 5px 0 0 10px;
list-style-type: none;
&:hover{
    cursor: pointer;
}
&::before{
    content: "🚀";
}
`