import { useState } from "react";

import { ProfileTabs, Account } from "../components";

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
        return <p>This is the content for Tab 2.</p>;
      case 3:
        return <p>This is the content for Tab 3.</p>;
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
