const Hero = () => {
  return (
    <div
      className="pb-20 pt-20 w-full h-[40vh] flex justify-center items-center bg-cover bg-center relative dark:text-white"
      style={{
        backgroundPosition: "center",
        position: "relative",
      }}
    >

      <div className="absolute inset-0 bg-black opacity-45"></div>
      <div>
        <div className="flex justify-center relative my-20 z-10 ">
          <div className=" max-w-[89vw] md:max-w-2x lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="text-center md:tracking-wider mb-8 text-lg md:text-lg lg:text-2xl">
              Asafe IT
            </p>       
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
