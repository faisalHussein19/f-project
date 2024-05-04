export default function SectionHeaders({subHeader,mainHeader}) {
    return (
        <>
        <h3 className=" uppercase text-gray-600 font-semibold leading-3">
                    {subHeader}
                </h3>
                <h2 className=" text-red-600 font-semibold text-4xl italic">
                    {mainHeader}
                </h2>
        </>
    )
}