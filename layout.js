    document.getElementById("estructura").innerHTML = layoutHTML;
window.layoutHTML = `
<header class="header-nav">
  <span>
    <h3>TIENDAS 3E --🏪 PORTAL online</h3>
  </span>
  <nav>
  <a href="/index.html">Inicio</a>
    <a href="/inventario/index.html">
      Inventario
    </a>

    <a href="/admin/index.html">
      Admin
    </a>

    <a href="/login/index.html">
      Login
    </a>

  </nav>

</header>


  <!-- Layout principal -->
  <div class="layout"   style="top:10vh; z-index: 10;" >
    <aside>
      <h3>Menú</h3>
      <p>Accede a las secciones usando el menú o el hash en URL.</p>
    </aside>
    <!-- Vistas SPA -->

           <main id="appContent">

    <div class="welcome-banner">
        <h1>¡Bienvenido al Sistema de Gestión!</h1>
        <p>Selecciona el módulo que deseas utilizar</p>
    </div>

    <!-- Barra de estadísticas rápidas -->
    <div class="stats-bar">
        <div class="stat-item">
            <div class="stat-number" id="totalProducts">0</div>
            <div class="stat-label">Productos</div>
        </div>
        <div class="stat-item">
            <div class="stat-number" id="todaySales">$0</div>
            <div class="stat-label">Ventas Hoy</div>
        </div>
        <div class="stat-item">
            <div class="stat-number" id="lowStock">0</div>
            <div class="stat-label">Stock Bajo</div>
        </div>
        <div class="stat-item">
            <div class="stat-number" id="pendingTasks">0</div>
            <div class="stat-label">Tareas Pendientes</div>
        </div>
   

      <!-- PERFIL -->
      <section id="perfil" class="view active">
        <div class="perfil">
          <div class="portada">
            <div class="foto-perfil"></div>
          </div>
          <div class="info">
            <h2>TIENDAS -3E</h2>
            <p>Mini mart. .</p>
            <div class="datos">
              
            </div>
          </div>
        </div>
      </section>
 </div>
      <!-- PRODUCTOS -->
      <section id="productos" class="view">
       <!---
        <h2>Productos</h2>
        <div class="categoria" id="bebidas">Bebidas</div>
        <div class="categoria" id="snacks">Snacks</div>
        <div class="categoria" id="lacteos">Lácteos</div>
        ----->
        <!-- Sección inventario con buscador -->


        <iframe height="1280px" src="/feed/productos.html"></iframe>
       
      </section>

      <!-- PROMOCIONES -->
      <section id="promociones" class="view">
        <h2>Promociones</h2>
        <p>Destaca tus ofertas y novedades aquí.</p>
        <iframe height="1000px" src="promos.html"></iframe>
      </section>

      <!-- CONTACTO / MAPA -->
      <section id="contacto" class="view">      </section>

      <section id="perfil" class="view active">...</section>
<section id="productos" class="view">...</section>
<section id="promociones" class="view">...</section>
<section id="contacto" class="view">...</section>


    <!-- Grid de Cards del Menú Principal -->
    <div class="dashboard" style="border:2px">
        <!-- Punto de Venta -->
        <div class="card" onclick="location.href='index_pos/index.html'">
            <div class="card-icon">🛒</div>
            <h2>Punto de Venta</h2>
            <p>Sistema completo de ventas con carrito, cobro con tarjeta/efectivo, tickets y gestión de transacciones en tiempo real.</p>
            <span class="card-badge">POS Activo</span>
        </div>

        <!-- Administración e Inventario -->
        <div class="card" onclick="location.href='/inventario/index.html'">
            <div class="card-icon">📦</div>
            <h2>Administración & Inventario</h2>
            <p>Gestión completa de productos, categorías, precios, stock, proveedores y control de caducidades.</p>
            <span class="card-badge">CRUD Completo</span>
        </div>

        <!-- Cortes de Caja -->
        <div class="card" onclick="location.href='cortes.html'">
            <div class="card-icon">💳</div>
            <h2>Cortes de Caja</h2>
            <p>Generación de cortes X y Z, conciliación de pagos, reportes financieros y cierre de turnos.</p>
            <span class="card-badge">Corte X/Z</span>
        </div>

        <!-- Auditoría -->
        <div class="card" onclick="location.href='auditor.html'">
            <div class="card-icon">🔍</div>
            <h2>Auditoría y Control</h2>
            <p>Auditoría de movimientos, trazabilidad de productos, reportes de seguridad y logs del sistema.</p>
            <span class="card-badge">Auditoría</span>
        </div>

        <!-- Reportes -->
        <div class="card" onclick="location.href='reports.html'">
            <div class="card-icon">📊</div>
            <h2>Reportes y Analytics</h2>
            <p>Reportes avanzados de ventas, inventario, rendimiento, gráficos interactivos y exportación a Excel.</p>
            <span class="card-badge">Analytics</span>
        </div>

        <!-- Gestión de Personal -->
        <div class="card" onclick="location.href='personal.html'">
            <div class="card-icon">👥</div>
            <h2>Gestión de Personal</h2>
            <p>Administración de usuarios, roles, permisos, horarios y perfiles de empleados.</p>
            <span class="card-badge">RRHH</span>
        </div>

        <!-- Sistema de Login -->
        <div class="card" onclick="location.href='login.html'">
            <div class="card-icon">🔐</div>
            <h2>Acceso y Seguridad</h2>
            <p>Sistema de autenticación, roles de usuario, recuperación de contraseña y control de acceso.</p>
            <span class="card-badge">Login System</span>
        </div>

        <!-- Configuración -->
        <div class="card" onclick="location.href='config.html'">
            <div class="card-icon">⚙️</div>
            <h2>Configuración del Sistema</h2>
            <p>Configuración general, impuestos, métodos de pago, impresoras y personalización.</p>
            <span class="card-badge">Settings</span>
        </div>
    </div>
      <aside>

    <h3>Info</h3>

  </aside>

</div>


`;
