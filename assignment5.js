function evaluateConditions(obj) {
    if (obj.age > 18 && obj.hasLicense) {
      return "Eligible to drive";
    }
    if (obj.temperature > 30 || obj.humidity > 70) {
      return "Warning: High discomfort level";
    }
    if ((obj.role === "admin" || obj.role === "editor") && obj.isActive) {
      return "Access granted";
    }
    if (!obj.isBanned && obj.points > 100) {
      return "User rewarded";
    }
    if ((obj.nightMode && obj.battery < 20) || !obj.notifications) {
      return "Low power or muted alerts";
    }
    if (obj.age < 13 || !obj.emailVerified) {
      return "Parental guidance required";
    }
    if (obj.isOnline && !obj.isIdle) {
      return "User is active";
    }
    return "No matching condition";
  }
  
  const user = {
    age: 22,
    hasLicense: true,
    temperature: 25,
    humidity: 40,
    role: "user",
    isActive: true,
    isBanned: false,
    points: 150,
    nightMode: false,
    battery: 15,
    notifications: true,
    emailVerified: true,
    isOnline: true,
    isIdle: false
  };
  
  console.log(evaluateConditions(user));
  