
import React, { useState } from 'react';
import { Project, Product, Inquiry } from '../types';

interface AdminPanelProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ projects, setProjects, products, setProducts, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'products' | 'inquiries'>('overview');

  // Mock Inquiries
  const [inquiries] = useState<Inquiry[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', type: 'Residential', message: 'I need a duplex built in Lekki.', date: '2023-10-24', status: 'New' },
    { id: '2', name: 'Jane Smith', email: 'jane@biz.com', type: 'Commercial', message: 'Looking for warehouse developers.', date: '2023-10-23', status: 'Replied' },
  ]);

  const removeProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const removeProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="fixed inset-0 z-[200] bg-gray-100 flex overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 flex items-center space-x-3 border-b border-gray-800">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold">A</div>
          <span className="font-bold tracking-tight">APEX ADMIN</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'overview', label: 'Overview', icon: 'M4 6h16M4 12h16M4 18h7' },
            { id: 'projects', label: 'Projects', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16' },
            { id: 'products', label: 'Inventory', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
            { id: 'inquiries', label: 'Inquiries', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === item.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button onClick={onClose} className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-800 hover:bg-red-900/50 text-gray-300 rounded-xl transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Exit Admin</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-bold text-gray-900 capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Welcome, Administrator</span>
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">AD</div>
          </div>
        </header>

        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Total Projects', value: projects.length, color: 'text-blue-600' },
                  { label: 'Active Items', value: products.length, color: 'text-green-600' },
                  { label: 'Unread Inquiries', value: '12', color: 'text-orange-600' },
                  { label: 'Monthly Traffic', value: '4.2k', color: 'text-purple-600' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                    <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-6">
                   <div className="space-y-4">
                     {[1,2,3].map(i => (
                       <div key={i} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">New project inquiry received from <strong>Michael Smith</strong></p>
                            <p className="text-xs text-gray-400">2 hours ago</p>
                          </div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-900">Portfolio Management</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">
                  + Add New Project
                </button>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Year</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img src={project.imageUrl} className="w-10 h-10 rounded-lg object-cover mr-3" alt="" />
                          <span className="font-bold text-gray-900">{project.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{project.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{project.year}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <button className="text-blue-600 hover:text-blue-900 font-bold mr-4">Edit</button>
                        <button onClick={() => removeProject(project.id)} className="text-red-600 hover:text-red-900 font-bold">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-900">Inventory & Marketplace</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">
                  + Add Product
                </button>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Stock Status</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                         <div className="flex items-center">
                          <img src={product.imageUrl} className="w-10 h-10 rounded-lg object-cover mr-3" alt="" />
                          <span className="font-bold text-gray-900">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">₦{product.price.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">In Stock</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <button className="text-blue-600 hover:text-blue-900 font-bold mr-4">Edit</button>
                        <button onClick={() => removeProduct(product.id)} className="text-red-600 hover:text-red-900 font-bold">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'inquiries' && (
             <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Customer Inquiries</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {inquiries.map((inquiry) => (
                  <div key={inquiry.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">{inquiry.name[0]}</div>
                        <h4 className="font-bold text-gray-900">{inquiry.name} <span className="text-gray-400 font-normal text-sm ml-2">{inquiry.email}</span></h4>
                      </div>
                      <span className={`px-2 py-1 text-[10px] font-bold rounded-full uppercase ${inquiry.status === 'New' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                        {inquiry.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 bg-gray-100 p-4 rounded-xl mt-4">"{inquiry.message}"</p>
                    <div className="mt-4 flex space-x-4">
                      <button className="text-xs font-bold text-blue-600 hover:underline">Reply via Email</button>
                      <button className="text-xs font-bold text-green-600 hover:underline">WhatsApp Client</button>
                      <button className="text-xs font-bold text-gray-400 hover:underline">Archive</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
