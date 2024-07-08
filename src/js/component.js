const header = document.getElementById("header");
if (header != null) {
  header.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Asobiba_ver.2</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/SeiyaYamaoka" target="_blank">Github</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="samples.html">Samples</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    `;
}
