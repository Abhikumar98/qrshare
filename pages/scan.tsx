import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/QRCodeReader"), {
    ssr: false,
});

const Scan = () => {
    const handleDataValidation = (value: string) => {
        console.log("data ----> ", value);
    };

    return (
        <div className="w-screen h-screen bg-blue-50">
            <div className="text-4xl py-5 text-center font-bold font-sans">
                Scan code
            </div>
            <div className="text-xl py-5 w-3/4 font-sans flex mx-auto text-center">
                Your data will be uploaded anonymously and will be deleted
                automatically after 24 hours
            </div>
            <DynamicComponent getData={handleDataValidation} />
        </div>
    );
};

export default Scan;