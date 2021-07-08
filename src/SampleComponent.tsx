interface Props {
  /*
    1. make this prop required (`someProp: () => void`)
    2. save the file
    3. see TS iframe error page in browser
    4. make this prop not required (`someProp?: () => void`)
    5. is the TS ifram error page still there for you?
         for me, it is, even though the console seems to have recognized the change
  */
  someFn?: () => void,
  type: 'x' | 'y',
}

export default function SampleComponent({ someFn }: Props) {
  return <button onClick={someFn}>sample buttons</button>
}
