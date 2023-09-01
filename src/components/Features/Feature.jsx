const Feature = ({ feature }) => {
    return (
      <div
        className={` flex flex-col justify-center  items-center text-center max-w-screen-lg mx-auto bg-black relative
         ${
           feature.id % 2 != 0 ? "md:flex-row" : " md:flex-row-reverse"
         } space-y-4 gap-3`}
        key={feature.id}
      >
        <div className="flex flex-col justify-center items-center space-y-3 gap-2 text-white mt-12" >
          <h1 className="text-xl lg:text-4xl text-center">{feature?.title}</h1>
          <h1 className="text-base lg:text-2xl text-center">{feature?.description}</h1>
        </div>
        <div className="relative flex justify-center items-center">
          <img className="w-[80%] rounded-md " src={`./images/${feature?.image}`} alt="" />
          <video autoPlay="autoPlay" loop muted type="m4v" className="w-[80%] -z-10 absolute top-2 " src={`./images/${feature?.video}`} />
        </div>
      </div>
    );
  };
  
  export default Feature;

// const Feature = ({ title, description, image, video, id }) => {
// 	return (
// 		<div
// 			className={`relative mx-auto flex max-w-screen-lg flex-col items-center justify-center  ${
// 				id % 2 !== 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
// 			} space-y-4`}>
// 			<div className='mt-12 flex-1 space-y-4 tracking-wider'>
// 				<h1 className='max-w-lg text-center text-4xl font-bold sm:text-5xl'>
// 					{title}
// 				</h1>
// 				<h2 className='text-center text-2xl tracking-normal'>{description}</h2>
// 			</div>
// 			<div className='relative flex-1'>
// 				<img className='z-10' alt='' src={`./images/${image}`} />
// 				<video
// 					loop
// 					autoPlay
// 					className='absolute top-1 -z-10 sm:top-20 sm:left-16 sm:w-96'
// 					src={`./images/${video}`}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default Feature;