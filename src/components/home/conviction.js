import ArrowsDown from '../../assets/icons/arrows-down.svg';
import CaretDown from '../../assets/icons/caret-down.svg';
import EmergencyIcon from '../../assets/icons/emergency.svg';
import ConstructionIcon from '../../assets/icons/construct.svg';
import ProjectIcon from '../../assets/icons/bank.svg';
import TrustedIcon from '../../assets/icons/trust.svg';
import TransparentIcon from '../../assets/icons/receipt.svg';
import SecuredIcon from '../../assets/icons/wallet.svg';

const Conviction = () => {
    return (
        <div id="conviction" className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h3 className="text-center">
                        <i>crowdfunding</i>
                        <span style={{fontWeight: 'lighter', fontSize: '14px'}}>/ˈkraʊd.fʌn.dɪŋ/</span>
                        <br/>
                        <span style={{fontWeight: 'lighter'}}>the practice of funding a project or venture by raising money from a large number of people, in modern times typically via the Internet.</span></h3>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row down-arrows">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img src={ArrowsDown} alt="Arrows down" />
                    <img src={CaretDown} alt="Caret down" className="last" />
                </div>
            </div>
            <div id="sections" className="row text-center align-items-center">
                <h4 className="text-center">Let's secure your funds for</h4>
                <div className="col-md-4 section">
                    <div>
                        <img src={EmergencyIcon} alt="" />
                        <h5>emergency</h5>
                    </div>
                </div>
                <div className="col-md-4 section">
                    <div>
                        <img src={ConstructionIcon} alt="construction" />
                        <h5>construction</h5>
                    </div>
                </div>
                <div className="col-md-4 section">
                    <div>
                        <img src={ProjectIcon} alt="project" />
                        <h5>project</h5>
                    </div>
                </div>
                <h4 className="text-center">We are</h4>
                <div className="col-md-4 section">
                    <div>
                        <img src={TrustedIcon} alt="trusted" />
                        <h5>trusted</h5>
                    </div>
                </div>
                <div className="col-md-4 section">
                    <div>
                        <img src={TransparentIcon} alt="transparent" />
                        <h5>transparent</h5>
                    </div>
                </div>
                <div className="col-md-4 section">
                    <div>
                        <img src={SecuredIcon} alt="secured" />
                        <h5>secured</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conviction;
