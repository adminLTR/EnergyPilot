import Box from "../components/Box";
import InfoBox from "../components/InfoBox";

export default function Home({}) {
    return (
        <div className="w-8/12">
            <Box>
                <InfoBox title={"Consumo habitual"} number={49.82} units={'(kWh)'}>
                    <span className="text-light-gray">
                        De 01 de Enero de 2023 hasta 05 Marzo de 2023
                    </span>
                </InfoBox>
            </Box>
        </div>
    )
}