import Picture from "./Picture"

const Pictures = ({pictures}) => {
  return (
    <>
        {pictures.map(item => {
            return (
                <div key={item.id}>
                    <Picture imageUrl = {item.imageUrl}/>
                </div>
            )
        })}
    </>
  )
}
export default Pictures