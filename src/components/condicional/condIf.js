
export default function condIf(props){
  if(props.teste) {
      return props.children
  }else {
      return false
  }
}