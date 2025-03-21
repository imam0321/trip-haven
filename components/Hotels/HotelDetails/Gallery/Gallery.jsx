import Image from "next/image";


export default function Gallery({ gallery }) {
  const newGallery = [...gallery];
  newGallery.shift();
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image src={gallery[0]} className="h-[400px]" height={400} width={400} alt="Main Picture" />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {
            newGallery.map(image => <Image key={image} src={image} height={400} width={400} alt="Sub Picture" />)
          }
        </div>
      </div>
    </section>
  )
}
