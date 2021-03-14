import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layout
import { Footer } from "./components/layout/Footer";
// pages
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home2_Header2 from "./components/Header_style_02";
import Home3_Header3 from "./components/Header_style_03";
import Aboutus_01 from "./components/pages/Aboutus_01";
import Aboutus_02 from "./components/pages/Aboutus_02";
import Services_01 from "./components/pages/Services_01";
import Services_02 from "./components/pages/Services_02";
import Our_expert from "./components/pages/Our_expert";
import Career from "./components/pages/Career";
import Team_detail from "./components/pages/Team_detail";
import Faq from "./components/pages/Faq";
import Contact_01 from "./components/pages/Contact_01";
import Contact_02 from "./components/pages/Contact_02";
import Error from "./components/pages/Error";
import Element from "./components/pages/Element";
import It_consultancy from "./components/services/It_consultancy";
import Digital_services from "./components/services/Digital_services";
import Advisory_services from "./components/services/Advisory_services";
import Data_structuring from "./components/services/Data_structuring";
import Experience_design from "./components/services/Experience_design";
import Content_engineering from "./components/services/Content_engineering";
import Project_style1 from "./components/project/Project_style1";
import Project_style2 from "./components/project/Project_style2";
import Single_style1 from "./components/project/Single_style1";
import Single_style2 from "./components/project/Single_style2";
import Single_style3 from "./components/project/Single_style3";
import Blog from "./components/blog/Blog";
import Blog_grid from "./components/blog/Blog_grid";
import Blog_left_image from "./components/blog/Blog_left_image";
import Blog_top_image from "./components/blog/Blog_top_image";
import Single_blog from "./components/blog/Single_blog";
import Shop from "./components/shop/Shop";
import Product_details from "./components/shop/Product_details";
import Cart from "./components/shop/Cart";
import Checkout from "./components/shop/Checkout";
import ScrollToTop from "./components/layout/Gotop";

// Training
import TrainingList1 from "./components/training/Training_list1";
import TrainingList2 from "./components/training/Training_list2";
import TrainingList3 from "./components/training/Training_list3";
import AI from "./components/training/AI";
import AWS from "./components/training/AWS";
import Cisco from "./components/training/Cisco";
import CompTia from "./components/training/CompTia";
import DataCenter from "./components/training/DataCenter";
import DigitalMarketing from "./components/training/DigitalMarketing";
import IoT from "./components/training/IoT";
import ISACA from "./components/training/ISACA";
import ITGovernence from "./components/training/ITGovernence";
import ITSecuirity from "./components/training/ITSecuirity";
import ITServiceManagment from "./components/training/ITServiceManagment";
import Juniper from "./components/training/Juniper";
import PLCHMI from "./components/training/PLCHMI";
import Microsoft from "./components/training/Microsoft";
import MicroTik from "./components/training/MicroTik";
import Oracle from "./components/training/Oracle";
import Programming from "./components/training/Programming";
import ProjectManagement from "./components/training/ProjectManagement";
import ReadHat from "./components/training/ReadHat";
import VMware from "./components/training/VMware";

// Solutions
import Solutions1 from "./components/solutions/Solutions1";
import Solutions2 from "./components/solutions/Solutions2";
import Solutions3 from "./components/solutions/Solutions3";
import EnterpriseSystemPrivateCloud from "./components/solutions/EnterpriseSystemPrivateCloud";
import AI_Solution from "./components/solutions/AISolution";
import Blockchain from "./components/solutions/Blockchain";
import CallCenter from "./components/solutions/CallCenter";
import CloudComputing from "./components/solutions/CloudComputing";
import CyberSecurity from "./components/solutions/CyberSecurity";
import DataCenterPowerCooling from "./components/solutions/DataCenterPowerCooling";
import DataRecovery from "./components/solutions/DataRecovery";
import DataScience from "./components/solutions/DataScience";
import Deployment from "./components/solutions/Deployment";
import DigitalMarketingSotution from "./components/solutions/DigitalMarketingSotution";
import Ecommerce from "./components/solutions/Ecommerce";
import EndUserComputing from "./components/solutions/EndUserComputing";
import EnterpriseVideoConferencing from "./components/solutions/EnterpriseVideoConferencing";
import GreenIT from "./components/solutions/GreenIT";
import IoTSolution from "./components/solutions/IoTSolution";
import IPTelephony from "./components/solutions/IPTelephony";
import ITAudit from "./components/solutions/ITAudit";
import ITAutomation from "./components/solutions/ITAutomation";
import ITTrainingCertifications from "./components/solutions/ITTrainingCertifications";
import MobileApps from "./components/solutions/MobileApps";
import NetworkServerMonitoring from "./components/solutions/NetworkServerMonitoring";
import ServerPeriphery from "./components/solutions/ServerPeriphery";
import SoftwareSolution from "./components/solutions/SoftwareSolution";
import SoftwareDefineNetworkDataCenterInfrastructure from "./components/solutions/SoftwareDefineNetworkDataCenterInfrastructure";
import StructuredCabling from "./components/solutions/StructuredCabling";
import Website from "./components/solutions/Website";

// Products
import CATVProducts from "./components/porduct/CATVProducts";
import ComputerAccessories from "./components/porduct/ComputerAccessories";
import FiberOpticNetworkingAccessories from "./components/porduct/FiberOpticNetworkingAccessories";
import FTTX from "./components/porduct/FTTX";
import LANNetworkingAccessories from "./components/porduct/LANNetworkingAccessories";
import NetworkingCables from "./components/porduct/NetworkingCables";
import NetworkRouter from "./components/porduct/NetworkRouter";
import NetworkSwitch from "./components/porduct/NetworkSwitch";
import NetworkTestingEquipment from "./components/porduct/NetworkTestingEquipment";
import ServerRackCabinet from "./components/porduct/ServerRackCabinet";
import WirelessNetworking from "./components/porduct/WirelessNetworking";
import WirelessRouter from "./components/porduct/WirelessRouter";

const appHistory = {
  basename: process.env.PUBLIC_URL,
};
const history = createBrowserHistory(appHistory);
function App() {
  return (
    <div className="page">
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
        <ScrollToTop />
        <Route exact path="/" component={Home} />
        <Route path="/home2" component={Home2} />
        <Route path="/home3" component={Home3} />
        <Route path="/header_style_02" component={Home2_Header2} />
        <Route path="/header_style_03" component={Home3_Header3} />
        <Route path="/about_us" component={Aboutus_01} />
        <Route path="/aboutus_02" component={Aboutus_02} />
        <Route path="/services_01" component={Services_01} />
        <Route path="/services_02" component={Services_02} />
        <Route path="/our_expert" component={Our_expert} />
        <Route path="/team_detail" component={Team_detail} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact_01" component={Contact_01} />
        <Route path="/contact_02" component={Contact_02} />
        <Route path="/error" component={Error} />
        <Route path="/element" component={Element} />
        <Route path="/it_consultancy" component={It_consultancy} />
        <Route path="/digital_services" component={Digital_services} />
        <Route path="/advisory_services" component={Advisory_services} />
        <Route path="/data_structuring" component={Data_structuring} />
        <Route path="/experience_design" component={Experience_design} />
        <Route path="/content_engineering" component={Content_engineering} />
        <Route path="/project_style1" component={Project_style1} />
        <Route path="/project_style2" component={Project_style2} />
        <Route path="/single_style1" component={Single_style1} />
        <Route path="/single_style2" component={Single_style2} />
        <Route path="/single_style3" component={Single_style3} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog_grid" component={Blog_grid} />
        <Route path="/blog_left_image" component={Blog_left_image} />
        <Route path="/blog_top_image" component={Blog_top_image} />
        <Route path="/single_blog" component={Single_blog} />
        <Route path="/shop" component={Shop} />
        <Route path="/product_details" component={Product_details} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/career" component={Career} />
        {/* Training */}
        <Route path="/training_list1" component={TrainingList1} />
        <Route path="/training_list2" component={TrainingList2} />
        <Route path="/training_list3" component={TrainingList3} />
        <Route path="/AI-training" component={AI} />
        <Route path="/AWS-training" component={AWS} />
        <Route path="/Cisco-training" component={Cisco} />
        <Route path="/CompTia-training" component={CompTia} />
        <Route path="/DataCenter-training" component={DataCenter} />
        <Route path="/DigitalMarketing-training" component={DigitalMarketing} />
        <Route path="/IoT-training" component={IoT} />
        <Route path="/ISACA-training" component={ISACA} />
        <Route path="/ITGovernence-training" component={ITGovernence} />
        <Route path="/ITSecuirity-training" component={ITSecuirity} />
        <Route
          path="/ITServiceManagment-training"
          component={ITServiceManagment}
        />
        <Route path="/Juniper-training" component={Juniper} />
        <Route path="/PLCHMI-training" component={PLCHMI} />
        <Route path="/Microsoft-training" component={Microsoft} />
        <Route path="/MicroTik-training" component={MicroTik} />
        <Route path="/Oracle-training" component={Oracle} />
        <Route path="/Programming-training" component={Programming} />
        <Route
          path="/ProjectManagement-training"
          component={ProjectManagement}
        />
        <Route path="/ReadHat-training" component={ReadHat} />
        <Route path="/VMware-training" component={VMware} />
        {/* Solutions */}
        <Route path="/solutions_1" component={Solutions1} />
        <Route path="/solutions_2" component={Solutions2} />
        <Route path="/solutions_3" component={Solutions3} />
        <Route
          path="/Enterprise_System_Private_Cloud"
          component={EnterpriseSystemPrivateCloud}
        />
        <Route path="/AI_Solution" component={AI_Solution} />
        <Route path="/Blockchain_Solution" component={Blockchain} />
        <Route path="/Call_Center_Solution" component={CallCenter} />
        <Route path="/Cloud_Computing" component={CloudComputing} />
        <Route path="/Cyber_Security" component={CyberSecurity} />
        <Route
          path="/Data_Center_Power_Cooling"
          component={DataCenterPowerCooling}
        />
        <Route path="/Data_Recovery" component={DataRecovery} />
        <Route path="/Data_Science" component={DataScience} />
        <Route path="/Deployment_Solution" component={Deployment} />
        <Route
          path="/Digital_Marketing_Solution"
          component={DigitalMarketingSotution}
        />
        <Route path="/Ecommerce_Solution" component={Ecommerce} />
        <Route path="/End_User_Computing" component={EndUserComputing} />
        <Route
          path="/Enterprise_Video_Conferencing"
          component={EnterpriseVideoConferencing}
        />
        <Route path="/Green_IT" component={GreenIT} />
        <Route path="/IoT_Solution" component={IoTSolution} />
        <Route path="/IP_Telephony" component={IPTelephony} />
        <Route path="/IT_Audit" component={ITAudit} />
        <Route path="/IT_Automation" component={ITAutomation} />
        <Route
          path="/IT_Training_Certifications"
          component={ITTrainingCertifications}
        />
        <Route path="/Mobile_Apps" component={MobileApps} />
        <Route
          path="/Network_Server_Monitoring"
          component={NetworkServerMonitoring}
        />
        <Route path="/Server_Periphery" component={ServerPeriphery} />
        <Route path="/Software_Solution" component={SoftwareSolution} />
        <Route
          path="/Software_Define_Network_Data_Center_Infrastructure"
          component={SoftwareDefineNetworkDataCenterInfrastructure}
        />
        <Route path="/Structured_Cabling" component={StructuredCabling} />
        <Route path="/Website_Solution" component={Website} />

        {/* Products */}
        <Route path="/catv-products" component={CATVProducts} />
        <Route path="/networking-cables" component={NetworkingCables} />
        <Route path="/network-router" component={NetworkRouter} />
        <Route path="/network-switch" component={NetworkSwitch} />
        <Route path="/fttx" component={FTTX} />
        <Route path="/wireless-networking" component={WirelessNetworking} />
        <Route path="/wireless-router" component={WirelessRouter} />
        <Route
          path="/fiber-optic-networking-accessories"
          component={FiberOpticNetworkingAccessories}
        />
        <Route
          path="/lan-networking-accessories"
          component={LANNetworkingAccessories}
        />
        <Route
          path="/network-testing-equipment"
          component={NetworkTestingEquipment}
        />
        <Route path="/server-rack-cabinet" component={ServerRackCabinet} />
        <Route path="/computer-accessories" component={ComputerAccessories} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
