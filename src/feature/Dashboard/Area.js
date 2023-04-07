import ReactApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";

function Area() {
  const { t } = useTranslation();
  const series = [
    {
      name: "February",
      data: [
        {
          x: 2019,
          y: 20,
        },
        {
          x: 2020,
          y: 40,
        },
        {
          x: 2021,
          y: 60,
        },
        {
          x: 2022,
          y: 80,
        },
      ],
    },
    {
      name: "March",
      data: [
        {
          x: 2019,
          y: 50,
        },
        {
          x: 2020,
          y: 100,
        },
        {
          x: 2021,
          y: 150,
        },
        {
          x: 2022,
          y: 200,
        },
      ],
    },
    {
      name: "April",
      data: [
        {
          x: 2019,
          y: 100,
        },
        {
          x: 2020,
          y: 150,
        },
        {
          x: 2021,
          y: 200,
        },
        {
          x: 2022,
          y: 250,
        },
      ],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      type: "area",
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    title: {
      text: t("dashboard.area-title"),
      align: "left",
      style: {
        fontSize: "20px",
        color: "#C7C7C7",
      },
    },
    subtitle: {
      text: t("dashboard.area-subtitle"),
      align: "left",
      style: {
        color: "#8E8E93",
        fontSize: "16px",
      },
    },
    xaxis: {
      type: "year",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 3,
      floating: false,
      style: {
        fontSize: "16px",
      },
      title: {
        text: "Total",
        rotate: 0,
        offsetX: 90,
        offsetY: -120,
        style: {
          fontSize: "16px",
          color: "#4F4F4F",
        },
      },

      labels: {
        style: {
          colors: "#8e8da4",
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 0.5,
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30,
        },
      },
      padding: {
        left: 20,
      },
    },
  };

  return (
    <div className="area">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={298}
        width={439.48}
      />
    </div>
  );
}

export default Area;
