import bannerImage from "../assets/arpit2.jpg"

const About = () => {
    return (
        <>
            <div className='main-container   bg-gray-200 border py-16'>
                <h1 className="text-5xl pb-16 underline font-bold text-center">About me</h1>

                <div className="flex items-center">
                    <div className="w-full flex justify-center ">
                        {/*image*/}

                        <img className=" rounded-full w-2/3" src={bannerImage} alt="Divyasnhu sharma" />
                    </div>



                    <div className="w-full flex justify-start">
                        {/*textr*/}
                        <div className="space-y-5 w-2/3">
                            <h1 className="text-4xl">Frontend Develpoer</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga veritatis quod omnis officiis obcaecati animi quibusdam fugiat velit sapiente.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore adipisci iste a voluptas fugiat in sunt eos, omnis iusto aliquid accusantium, soluta iure porro excepturi neque? Sed repellendus excepturi quibusdam enim laboriosam amet nihil, delectus odio reiciendis, nisi quasi nemo cupiditate saepe velit, fuga esse molestias ducimus maiores quaerat quisquam!</p>
                            <button className="bg-orange-500 px-3 py-2 rounded-full shadow-lg">Read more...</button>
                        </div>
                    </div>
                </div>


            </div>


        </>

    )
}

export default About;