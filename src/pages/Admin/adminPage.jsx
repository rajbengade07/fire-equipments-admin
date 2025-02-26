import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Order from '../Orders/Orders';
import List from '../List/List';
import Add from '../Add/Add';
import './Admin.css';
import axios from 'axios'; // Add axios for API requests
import { toast } from 'react-toastify';
import { url } from '../../assets/assets'; // Assuming URL is imported from assets

function AdminPage() {

  const [orders, setOrders] = useState([]);
  const [list, setList] = useState([]);

  // Fetch all orders
  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data.reverse()); // Assuming you want to reverse the order
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Error fetching orders");
    }
  };

  // ḷist
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

 

  useEffect(() => {
    fetchAllOrders();
    fetchList();
  }, []);

  return (
    <div className="tab">
      <Tabs className="tabss">
        {/* Tab list */}
        <div className="left">
          <TabList className="left-items">
            <Tab className='list'>Dashboard</Tab>
            <Tab className='list'>Add items</Tab>
            <Tab className='list'>Order</Tab>
            <Tab className='list'>List</Tab>
          </TabList>
        </div>

        {/* Tabs Panels */}
        <div className="right">
          <TabPanel>
            {/* Admin info */}
            <div className="admin-data">
              <div className="admin-img">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt="Admin"
                  className="mx-auto mb-4 w-24 h-24 rounded-full"
                />
              </div>

              <div className="admin-info">
                <h3 className="text-lg font-bold">Role : <span>Admin</span></h3>
                <h3 className="text-lg font-bold">Name : <span>Raj Bengade</span></h3>
              </div>

              <div className="item-btn">
                {/* Display order and list lengths */}
                <button>Total Orders: <span> {orders.length}</span></button>
                <button>Total List Items: <span> {list.length}</span> </button>
              </div>
            </div>
          </TabPanel>


          {/* Add Items */}
          <TabPanel><Add /></TabPanel>

          {/* Order Info */}
          <TabPanel><Order orders={orders} /></TabPanel>

          {/* List Info */}
          <TabPanel className="TabPanel"><List /></TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default AdminPage;
