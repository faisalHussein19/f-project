export default function SectionHeaders2({subHeader2,mainHeader2}) {
    return (
        <>
        <h3 className=" uppercase text-gray-600 font-semibold leading-3">
                    {subHeader2}
                </h3>
                <h2 className=" text-red-600 font-semibold text-4xl italic">
                    {mainHeader2}
                </h2>
        </>
    )
}