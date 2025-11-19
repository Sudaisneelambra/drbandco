import AutomotiveLogisticsSection from "./AutomotiveLogisticsSection";
import ElectronicsLogisticsSection from "./ElectronicsLogisticsSection";
import ImportExportLogisticsSection from "./ImportExportLogisticsSection";
import LogisticsHeroSection from "./LogisticsHeroSection";
import LogisticsSpecializations from "./LogisticsSpecialisation";
import WhyChooseUsSection from "./WhyChooseUsSection";

export default function Page() {
  return (
    <div className="bg-black">
      <LogisticsHeroSection />
      <LogisticsSpecializations/>
      <AutomotiveLogisticsSection/>
      <ElectronicsLogisticsSection/>
      <ImportExportLogisticsSection/>
      <WhyChooseUsSection/>
    </div>
  );
}
