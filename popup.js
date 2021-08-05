const data = {
    project1: {
      name: 'Tonic',
      img: 'assets/SnapshootPortfolio.jpg',
      companyName: 'CANOPY',
      job: 'Back End Dev',
      year: 2015,
      decription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      lang: ['html', 'css', 'javaScript'],
    },
  
    project2: {
      name: 'Multi-Post Stories',
      img: 'assets/SnapshootPortfolio-2.jpg',
      companyName: 'FACEBOOK',
      job: 'Full Stack Dev',
      year: 2015,
      decription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      lang: ['html', 'Ruby on rails', 'css', 'javaScript'],
    },
  
    project3: {
      name: 'Facebook 360',
      img: 'assets/SnapshootPortfolio-3.jpg',
      companyName: 'FACEBOOK',
      job: 'Full Stack Dev',
      year: 2015,
      decription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      lang: ['html', 'Ruby on rails', 'css', 'javaScript'],
    },
    project4: {
      name: 'Uber Navigation',
      img: 'assets/SnapshootPortfolio-4.jpg',
      companyName: 'Uber',
      job: 'Lead Developer',
      year: 2018,
      decription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      lang: ['html', 'Ruby on rails', 'css', 'javaScript'],
    },
  };
  
  const nameID = document.getElementById('name');
  const img = document.getElementById('img');
  const companyName = document.getElementById('companyName');
  const job = document.getElementById('job');
  const year = document.getElementById('data');
  const descrition = document.getElementById('description');
  const lang = document.getElementById('lang');
  const button1 = document.querySelector('#btn-1');
  const button2 = document.querySelector('#btn-2');
  const button3 = document.querySelector('#btn-3');
  const button4 = document.querySelector('#btn-4');
  const btnClosePop = document.querySelector('.popup-close-btn');
  const popupOverlay = document.querySelector('.popup-overlay');
  const popup = document.getElementById('popup');
  
  function openPopUp() {
    popup.classList.remove('hidden');
  }
  
  function changePopup(order) {
    lang.innerHTML = '';
  
    const project = data[`project${order}`];
    nameID.innerHTML = project.name;
    img.src = project.img;
    companyName.innerHTML = project.companyName;
    job.innerHTML = project.job;
    year.innerHTML = project.year;
    descrition.innerHTML = project.decription;
    const langLength = project.lang.length;
    for (let i = 0; i < langLength; i += 1) {
      const element = document.createElement('li');
      element.innerHTML = `${project.lang[i]}`;
      lang.appendChild(element);
    }
    openPopUp();
  }
  
  function closePopUp() {
    popup.classList.add('hidden');
  }
  
  button1.addEventListener('click', () => {
    openPopUp();
    changePopup(1);
  });
  
  button2.addEventListener('click', () => {
    openPopUp();
    changePopup(2);
  });
  
  button3.addEventListener('click', () => {
    openPopUp();
    changePopup(3);
  });
  
  button4.addEventListener('click', () => {
    openPopUp();
    changePopup(4);
  });
  
  popupOverlay.addEventListener('click', closePopUp);
  btnClosePop.addEventListener('click', closePopUp);
