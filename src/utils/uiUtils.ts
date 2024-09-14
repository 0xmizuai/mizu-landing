export const avatarColors = ["#37D8FA", "oklch(32.11% 0.01 268.56)", "#FF7A00"];

export function getModalStyles(darkMode?: boolean) {
  return {
    content: {
      top: "50%",
      left: "50%",
      right: "200px",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: darkMode
        ? "1px solid oklch(23.89% 0.006 271.16)"
        : "1px solid #fafcfc",
      padding: 0,
      borderRadius: "16px",
      outline: 0,
      background: "#ffffff",
      boxShadow:
        "0 20px 25px -5px oklch(23.89% 0.006 271.16), 0 8px 10px -6px oklch(23.89% 0.006 271.16)",
      animation: "bounceIn .4s ease-out",
    },
    overlay: {
      background: darkMode ? "#1b1b1ba0" : "#1b1b1be0",
      zIndex: 100,
    },
  };
}
