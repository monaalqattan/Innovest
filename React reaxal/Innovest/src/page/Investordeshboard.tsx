
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Investordeshboard = () => {
  // Hardcoded Chart Data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Portfolio Growth",
        data: [20, 35, 40, 55, 70, 90],
        borderColor: "#4e73df",
        backgroundColor: "rgba(78,115,223,0.2)",
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { color: "#e9ecef", drawBorder: false },
        ticks: {
          callback: function (tickValue: string | number) {
            return "$" + tickValue + "k";
          },
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      
      {/* Header */}
      <div style={styles.header}>
<h2 style={{ ...styles.title, color: 'black' }}>Investor Dashboard</h2>

        <p style={styles.subtitle}>Welcome Back, Investor</p>
      </div>

      {/* Stats Boxes */}
      <div style={styles.statsGrid}>
        <div style={styles.card}>
          <h4>Total Investment</h4>
          <p style={styles.number}>$25,000</p>
        </div>

        <div style={styles.card}>
          <h4>total value</h4>
          <p style={styles.number}>$50,000</p>
        </div>

        <div style={styles.card}>
          <h4>Active Projects</h4>
          <p style={styles.number}>12</p>
        </div>

    
      </div>

      {/* Chart */}
      <div style={styles.chartCard}>
        <h3 style={{ marginBottom: 15 }}>Investment rate</h3>
        <div style={{ height: "300px" }}>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

    </div>
  );
};

// CSS-in-JS Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "30px",
    background: "#f8f9fc",
    fontFamily: "sans-serif",
    minHeight: "100vh",
  },

  header: {
    marginBottom: "25px",
  },

  title: {
    margin: 0,
    fontSize: "26px",
    fontWeight: 700,
    color: "#4e73df",
  },

  subtitle: {
    margin: 0,
    fontSize: "14px",
    color: "#858796",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },

  number: {
    marginTop: "10px",
    fontSize: "22px",
    fontWeight: 700,
    color: "#1cc88a",
  },

  chartCard: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
};

export default Investordeshboard;
