import { useState } from "react";

import { ProfileTabs, Account, History, PaymentMethods } from "../components";

const ProfileMainContent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Account />;
      case 2:
        return <History />;
      case 3:
        return <PaymentMethods />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default ProfileMainContent;
