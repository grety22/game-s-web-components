import BtnNormal from "./btn_normal"


export default function play_button() {
  return (
    // change btn width below, by using tailwind w classes or custom css 
    <div className="btn-wrapper w-96">
      <BtnNormal label="CONFIRM" />      
    </div>
  )
}
