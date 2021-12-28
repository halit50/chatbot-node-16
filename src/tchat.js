const Tchat = class {
  constructor(bots) {
    this.el = document.querySelector('#app');
    this.bots = bots;
  }

  renderHeader() {
    return `
          <header>
            <nav class="navbar navbar-dark bg-dark m-auto">
                <div class="container-fluid">
                  <span class="navbar-brand mb-0 h1">Chatbot.IO</span>
                </div>
              </nav>
          </header>`;
  }

  renderContainer() {
    return `
        <main class="container-fluid">
          <div class="row">
            ${this.renderBotsList()}
            ${this.renderMessages()}
          </div>
        </main>
      `;
  }

  renderMessages() {
    return `
      <section class="col-9 mt-2">
        <!-- Messages envoyés-->
        <div class="row" id="messages"></div>
        ${this.renderInputMessage()}
      </section>
    `;
  }

  renderInputMessage() {
    return `<div id="input-message" class="row mt-2">
      <div class="col-12">
          <form class="row g-2">
              <div class="col-10">
                <input type="text" class="form-control"placeholder="Your message">
              </div>
              <div class="col-2">
                  <div class="d-grid">
                      <button class="btn btn-primary" type="button">Send</button>
                    </div>
              </div>
            </form>
      </div>
  </div>`;
  }

  renderMessageSend(message) {
    const date = new Date();
    return `
      <div class="row">
          <div class="col-6">
          </div>
          <div class="col-6">
              <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                  <div class="card-header">
                    <div class="row">
                      <div class="col-2">
                        <img src="https://ag-spots-2021.o.auroraobjects.eu/2021/03/19/bmw-m3-f80-cs-c564819032021154026_2.jpg" class="img-fluid rounded-circle " alt="avatar">
                      </div>
                      <div class="col-10 mt-2 ">
                          Halit
                      </div>
                    </div>
                  </div>
                  <div class="card-body bg-light">
                    <h5 class="card-title">${date.toLocaleString()}</h5>
                    <p class="card-text">${message}</p>
                  </div>
                </div>
          </div>
      </div>
      `;
  }

  renderMessageReceived() {
    return `
      <div class="row mt-2">
      <div class="col-6">
          <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
              <div class="card-header">Bot</div>
              <div class="card-body bg-light">
                <h5 class="card-title">21 dec 15h30</h5>
                <p class="card-text">ok</p>
              </div>
            </div>
      </div>
      <div class="col-6">
          
      </div>
  </div>
      `;
  }

  renderBotsList() {
    return `
      <section id="bots" class="col-3">
      ${this.bots.map((bot) => this.renderBot(bot)).join('')}
      </section>
      `;
  }

  renderBot(data) {
    const {
      id,
      name,
      avatar,
      countMessage
    } = data;
    return `<div data-id=${id} class="row">
      <div class="col-4">
          <span>
              <img src="${avatar}" class="img-fluid rounded-circle border border-dark border-3" alt="${name}">
          </span>
      </div>
      <div class="col-4 pt-4">
        ${name}
      </div>
      <div class="col-4 pt-4">
          <span class="badge rounded-pill bg-primary">${countMessage}</span>
      </div>
  </div>
  <hr>`;
  }

  addCountMessage(el) {
    const badge = el.querySelector('.badge');

    badge.textContent = parseInt(badge.textContent, 10) + 1;
  }

  sendMessage() {
    const messageEl = document.querySelector('#messages');
    const inputEl = document.querySelector('#input-message input');
    const buttonEL = document.querySelector('#input-message button');

    buttonEL.addEventListener('click', (e) => {
      e.preventDefault();

      messageEl.scrollTop = messageEl.scrollHeight;
      messageEl.innerHTML += this.renderMessageSend(inputEl.value);

      inputEl.value = '';
    });
  }

  run() {
    this.el.innerHTML += this.renderHeader();
    this.el.innerHTML += this.renderContainer();

    this.sendMessage();
  }
};

export default Tchat;
