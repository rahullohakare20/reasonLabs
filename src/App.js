import React from 'react';
import Task_1 from './components/task_1/task_1.component';
import Task_2 from './components/task_2/task_2.component';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import './App.css';


function App(props) {

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className='layout'>
      <h1>Frontend Assignment</h1>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Task 1</Tab>
          <Tab>Task 2</Tab>
        </TabList>
        <TabPanel><Task_1 {...props} /></TabPanel>
        <TabPanel><Task_2></Task_2></TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
