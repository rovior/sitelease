// src/components/Services.js
import React from 'react';

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Oferecemos soluções completas de marketing digital para ajudar seu negócio a crescer online.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-globe text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Desenvolvimento Web</h3>
              </div>
              <p className="text-gray-600 mb-4">Sites responsivos e otimizados para conversão, desenvolvidos com as melhores tecnologias do mercado.</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">Saiba mais →</a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-search-dollar text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">SEO</h3>
              </div>
              <p className="text-gray-600 mb-4">Otimização para mecanismos de busca para aumentar sua visibilidade orgânica e atrair mais clientes.</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">Saiba mais →</a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-ad text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Google Ads</h3>
              </div>
              <p className="text-gray-600 mb-4">Campanhas estratégicas no Google para direcionar tráfego qualificado para seu site ou loja virtual.</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">Saiba mais →</a>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fab fa-facebook text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mídias Sociais</h3>
              </div>
              <p className="text-gray-600 mb-4">Gestão profissional de redes sociais para engajar seu público e fortalecer sua marca.</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">Saiba mais →</a>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope-open-text text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">E-mail Marketing</h3>
              </div>
              <p className="text-gray-600 mb-4">Campanhas de e-mail personalizadas para nutrir leads e fidelizar clientes.</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">Saiba mais →</a>
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden service-card transition duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-chart-line text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Analytics</h3>
              </div>
              <p className="text-gray-600 mb-4">Monitoramento e análise de dados para tomada de decisões estratégicas baseadas em resultados.</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">Saiba mais →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;