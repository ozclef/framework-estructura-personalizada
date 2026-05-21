/// <script>
    // Función para cargar estadísticas rápidas


    async function loadQuickStats() {
      try {
        const inventory = await loadInventory();
        const transactions = getTodayTransactions();
        
        // Total de productos
        document.getElementById('totalProducts').textContent = inventory.length;
        
        // Ventas de hoy
        const todayTotal = transactions.reduce((sum, t) => sum + t.total, 0);
        document.getElementById('todaySales').textContent = `$${todayTotal.toFixed(2)}`;
        
        // Productos con stock bajo (menos de 5 unidades)
        const lowStockCount = inventory.filter(p => p.stock < 5).length;
        document.getElementById('lowStock').textContent = lowStockCount;
        
        // Tareas pendientes (puedes personalizar esta lógica)
        document.getElementById('pendingTasks').textContent = transactions.length;
        
      } catch (error) {
        console.error('Error cargando estadísticas:', error);
      }
    }

    // Función de logout
    function logout() {
      if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        localStorage.removeItem('currentUser');
        location.href = 'login.html';
      }
    }

    // Cargar estadísticas cuando la página esté lista
    document.addEventListener('DOMContentLoaded', loadQuickStats);
  </script>
    </main>

    <aside>
      <h3>Info – loc</h3>
      <p>Detalles adicionales o noticias rápidas aquí.</p>

 <section>
   <img src="/imgs/quiropractico-publicidad.jpg" width="100%" height="400px" />
 </section> 
    </aside>
  </div>


  <script src="js/app.js"></script>

  <!-- Script SPA hash routing -->
  <script>
    function showView(id) {
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      const view = document.getElementById(id);
      if (view) view.classList.add('active');
    }

    function handleHash() {
      const hash = location.hash.replace('#','') || 'perfil';
      showView(hash);
    }

    window.addEventListener('hashchange', handleHash);
    window.addEventListener('load', handleHash);
  </script>



</body>
</html>



<!-----




  <!-- Botón para abrir login ---_ >
<button id="openLogin">Login</button>
<!-- Ventana modal ------ >
<div id="loginModal" style="display:none; position:fixed; top:20%; left:50%; transform:translateX(-50%);
    background:#222; color:#eee; padding:20px; border-radius:10px; box-shadow:0 0 10px #000;">
    <h3>Mini Login</h3>
    <input type="text" id="user" placeholder="Usuario" style="margin-bottom:10px;"><br>
    <input type="password" id="pass" placeholder="Contraseña" style="margin-bottom:10px;"><br>
    <button id="loginBtn">Ingresar</button>
    <button id="closeLogin">Cerrar</button>
    <p id="loginMsg" style="color:#f88; margin-top:5px;"></p>
</div>

<script>
const openLogin = document.getElementById('openLogin');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');
const loginBtn = document.getElementById('loginBtn');
const loginMsg = document.getElementById('loginMsg');

// Abrir ventana
openLogin.addEventListener('click', () => loginModal.style.display = 'block');

// Cerrar ventana
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
    loginMsg.textContent = '';
});

// Login simple
loginBtn.addEventListener('click', () => {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    
    // Validación chiquita
    if(user === 'admin' && pass === '1234'){
        loginMsg.style.color = '#0f0';
        loginMsg.textContent = 'Acceso permitido';
        setTimeout(() => loginModal.style.display = 'none', 500);
        // Aquí puedes disparar cualquier acción delicada
        console.log('Usuario validado');
    } else {
        loginMsg.style.color = '#f88';
        loginMsg.textContent = 'Usuario o contraseña incorrectos';
    }
});
</script>
---

// scripts/app.js
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const view = document.getElementById(id);
  if (view) view.classList.add('active');
}

// Detectar hash en URL
function handleHash() {
  const hash = location.hash.replace('#','') || 'perfil';
  showView(hash);
}

// Eventos
window.addEventListener('hashchange', handleHash);
window.addEventListener('load', handleHash);

