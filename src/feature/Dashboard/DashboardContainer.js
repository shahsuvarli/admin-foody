import Area from "./Area";
import Donut from "./Donut";
import "./Dashboard.css";
import Risk from "./Risk";
import { useTranslation } from "react-i18next";

const DashboardContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="charts container-fluid">
      <div className="donut">
        {<Donut name={t("dashboard.donuts-name")} />}
        <div className="donut-header">{t("dashboard.donut-description")}</div>
      </div>
      {<Area />}
      <div className="risk">
        {
          <Risk
            name={t("dashboard.assigned-risks")}
            desc={t("dashboard.no-risks")}
          />
        }
      </div>
      <div className="risk2">
        {
          <Risk
            name={t("dashboard.assigned-action-items")}
            desc={t("dashboard.no-items")}
          />
        }
      </div>
    </div>
  );
};

export default DashboardContainer;
