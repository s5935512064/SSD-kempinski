const test = () => {
    return (
        <>
            <div className="h-[300rem] w-full overflow-auto">
                <div className="h-screen w-full bg-red-500 flex justify-center flex-col items-center gap-4 bg-fixed">
                    <div className="w-96 h-96 bg-black -translate-x-10">

                    </div>

                    <div className="w-96 h-96 bg-white translate-x-10">

                    </div>

                </div>

                <div className="h-screen w-full bg-green-500 flex justify-center flex-col items-center gap-4 bg-fixed">
                    <div className="w-96 h-96 bg-black -translate-x-10">

                    </div>

                    <div className="w-96 h-96 bg-white translate-x-10">

                    </div>

                </div>


                <div className="h-screen w-full bg-blue-500 flex justify-center flex-col items-center gap-4 bg-fixed">
                    <div className="w-96 h-96 bg-black -translate-x-10">

                    </div>

                    <div className="w-96 h-96 bg-white translate-x-10">

                    </div>

                </div>


            </div>
        </>
    );
}

export default test;