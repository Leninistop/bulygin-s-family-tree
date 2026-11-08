// Дефолтная серая иконка (силуэт), если нет фото
const DEFAULT_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

// ============================================================
// 1. ЛЮДИ (Узлы)
// ============================================================
const people = [
    // --- БУЛЫГИНЫ ---
    { data: { id: 'makar_b', label: 'Макар\nБулыгин', image: 'photos/makar_b.jpg', local: 'no', info: 'Прапрадед. Отец Александра, Бориса и Лидии.' } },
    { data: { id: 'maria_b', label: 'Мария\nБулыгина', image: 'photos/maria_b.jpg', local: 'no', info: 'Прапрабабушка. Мать Александра, Бориса и Лидии.' } },
    { data: { id: 'alexander_m', label: 'Александр\nБулыгин (ст.)', image: 'photos/alexander_m.jpg', local: 'yes', info: 'Прадед. Переехал в Мамоново в 1960-х.' } },
    { data: { id: 'klavdia_b', label: 'Клавдия\nБулыгина', image: 'photos/klavdia_b.jpg', local: 'yes', info: 'Прабабушка. Работала в зверосовхозе Мамоново.' } },
    { data: { id: 'boris_b', label: 'Борис\nБулыгин', image: 'photos/boris_b.jpg', local: 'yes', info: 'Двоюродный прадед. Работал на рыбоконсервном комбинате в Мамоново.' } },
    { data: { id: 'lidia_b', label: 'Лидия\nБулыгина', image: 'photos/lidia_b.jpg', local: 'no', info: 'Двоюродная прабабушка.' } },
    { data: { id: 'alexander_b', label: 'Александр\nБулыгин', image: 'photos/alexander_b.jpg', local: 'yes', info: 'Дед. Работал водителем, жил в Мамоново.' } },
    { data: { id: 'lyubov', label: 'Любовь\nБулыгина', image: 'photos/lyubov.jpg', local: 'yes', info: 'Бабушка. Работала в Мамоновском зверосовхозе.' } },
    { data: { id: 'vladimir_b', label: 'Владимир\nБулыгин', image: 'photos/vladimir_b.jpg', local: 'yes', info: 'Двоюродный дед. Ликвидатор аварии на ЧАЭС.' } },
    { data: { id: 'anatoly', label: 'Анатолий\nБулыгин', image: 'photos/anatoly.jpg', local: 'yes', info: 'Отец. Живёт в Мамоново, по профессии сварщик.' } },
    { data: { id: 'denis', label: 'Денис\nБулыгин', image: 'photos/denis.jpg', local: 'yes', info: 'Дядя. Переехал в Мамоново в 2000 г.' } },

    // --- ТУРАНИНЫ ---
    { data: { id: 'iraida_t', label: 'Ираида\nТуранина', image: 'photos/iraida_t.jpg', local: 'no', info: 'Прапрабабушка. Мать Анатолия Туранина.' } },
    { data: { id: 'anatoly_t', label: 'Анатолий\nТуранин', image: 'photos/anatoly_t.jpg', local: 'no', info: 'Прадед. Участник ВОВ.' } },
    { data: { id: 'anfisa', label: 'Анфиса\nТуранина', image: 'photos/anfisa.jpg', local: 'no', info: 'Прабабушка. Труженица тыла.' } },
    { data: { id: 'viktor_t', label: 'Виктор\nТуранин', image: 'photos/viktor_t.jpg', local: 'yes', info: 'Двоюродный дед. Умер в Мамоново.' } },

    // --- МИХНОВЕЦ ---
    { data: { id: 'nikolay_m', label: 'Николай\nМихновец', image: 'photos/nikolay_m.jpg', local: 'no', info: 'Прапрадед.' } },
    { data: { id: 'marta_m', label: 'Марта\nМихновец', image: 'photos/marta_m.jpg', local: 'no', info: 'Прапрабабушка.' } },
    { data: { id: 'mikhail_m', label: 'Михаил\nМихновец', image: 'photos/mikhail_m.jpg', local: 'yes', info: 'Прадед. Работал на заводе «Янтарь».' } },
    { data: { id: 'klavdia_m', label: 'Клавдия\nМихновец', image: 'photos/klavdia_m.jpg', local: 'yes', info: 'Прабабушка. Работала на заводе «Янтарь».' } },
    { data: { id: 'ignat_m', label: 'Игнат\nМихновец', image: 'photos/ignat_m.jpg', local: 'no', info: 'Двоюродный прадед. Брат Михаила.' } },
    { data: { id: 'sergey_m', label: 'Сергей\nМихновец', image: 'photos/sergey_m.jpg', local: 'yes', info: 'Дед. Работал на заводе «Янтарь».' } },
    { data: { id: 'evgeny_m', label: 'Евгений\nМихновец', image: 'photos/evgeny_m.jpg', local: 'yes', info: 'Двоюродный дед. Работал на «Янтаре».' } },

    // --- ХЛУСОВЫ ---
    { data: { id: 'ivan_h', label: 'Иван\nХлусов', image: 'photos/ivan_h.jpg', local: 'yes', info: 'Прапрадед. Оборонял Брестскую крепость.' } },
    { data: { id: 'pelageya', label: 'Пелагея\nХлусова', image: 'photos/pelageya.jpg', local: 'yes', info: 'Прапрабабушка.' } },

    // --- БЕЛОВЫ ---
    { data: { id: 'ivan_b', label: 'Иван\nБелов', image: 'photos/ivan_b.jpg', local: 'yes', info: 'Прапрадед. Участник ВОВ.' } },
    { data: { id: 'olga', label: 'Ольга\nБелова', image: 'photos/olga.jpg', local: 'yes', info: 'Прапрабабушка. Переехала в Калининградскую обл.' } },
    { data: { id: 'nikolay_b', label: 'Николай\nБелов', image: 'photos/nikolay_b.jpg', local: 'yes', info: 'Прадед. Работал на ЖБИ-1, ходил в моря.' } },
    { data: { id: 'mikhail_b', label: 'Михаил\nБелов', image: 'photos/mikhail_b.jpg', local: 'no', info: 'Двоюродный прадед. Брат Николая.' } },
    { data: { id: 'antonina', label: 'Антонина\nБелова', image: 'photos/antonina.jpg', local: 'yes', info: 'Прабабушка. Работала плановиком на заводе ЖБИ-1.' } },
    { data: { id: 'svetlana', label: 'Светлана\nМихновец', image: 'photos/svetlana.jpg', local: 'yes', info: 'Бабушка. Работала на «Янтаре» и диспетчером.' } },
    { data: { id: 'dmitry_b', label: 'Дмитрий\nБелов', image: 'photos/dmitry_b.jpg', local: 'yes', info: 'Двоюродный дед. Работал на производстве мяса.' } },

    // --- ФИГУРОВЫ ---
    { data: { id: 'irinya_f', label: 'Иринья\nФигурова', image: 'photos/irinya_f.jpg', local: 'no', info: 'Прапрапрабабушка. Мать Петра Фигурова.' } },
    { data: { id: 'petr_f', label: 'Пётр\nФигуров', image: 'photos/petr_f.jpg', local: 'no', info: 'Прапрадед. Участник ВОВ.' } },
    { data: { id: 'maria_f', label: 'Мария\nФигурова', image: 'photos/maria_f.jpg', local: 'no', info: 'Прапрабабушка. Карелка.' } },
    { data: { id: 'nina_m', label: 'Нина\nМочалкина', image: 'photos/nina_m.jpg', local: 'no', info: 'Двоюродная прабабушка.' } },
    { data: { id: 'zoya', label: 'Зоя', image: 'photos/zoya.jpg', local: 'no', info: 'Двоюродная прабабушка.' } },
    { data: { id: 'valentina_p', label: 'Валентина\nПодопригора', image: 'photos/valentina_p.jpg', local: 'no', info: 'Двоюродная прабабушка.' } },
    { data: { id: 'ekaterina_k', label: 'Екатерина\nКузнецова', image: 'photos/ekaterina_k.jpg', local: 'no', info: 'Двоюродная прабабушка.' } },

    // --- ДЕТИ ---
    { data: { id: 'yulia', label: 'Юлия\nБулыгина', image: 'photos/yulia.jpg', local: 'yes', info: 'Мама. Специалист в Энерготрансбанке.' } },
    { data: { id: 'ilya', label: 'Илья\nБулыгин', image: 'photos/ilya.jpg', local: 'yes', info: 'Илья Анатольевич. Родился 5.07.2011 в Калининграде.' } },
    { data: { id: 'varvara', label: 'Варвара\nБулыгина', image: 'photos/varvara.jpg', local: 'yes', info: 'Сестра. Родилась 26.05.2021.' } },
    { data: { id: 'daniil', label: 'Даниил\nБулыгин', image: 'photos/daniil.jpg', local: 'yes', info: 'Брат. Родился 21.06.2026.' } }
];

// ============================================================
// 2. СВЯЗИ (Рёбра)
// ============================================================
const relationships = [
    // Булыгины
    { data: { source: 'makar_b', target: 'maria_b', type: 'married' } },
    { data: { source: 'makar_b', target: 'alexander_m', type: 'child' } },
    { data: { source: 'makar_b', target: 'boris_b', type: 'child' } },
    { data: { source: 'makar_b', target: 'lidia_b', type: 'child' } },
    { data: { source: 'alexander_m', target: 'klavdia_b', type: 'married' } },
    { data: { source: 'alexander_m', target: 'vladimir_b', type: 'child' } },
    { data: { source: 'alexander_m', target: 'alexander_b', type: 'child' } },
    { data: { source: 'alexander_b', target: 'lyubov', type: 'married' } },
    { data: { source: 'alexander_b', target: 'anatoly', type: 'child' } },
    { data: { source: 'alexander_b', target: 'denis', type: 'child' } },
    { data: { source: 'anatoly', target: 'yulia', type: 'married' } },
    { data: { source: 'anatoly', target: 'ilya', type: 'child' } },
    { data: { source: 'anatoly', target: 'varvara', type: 'child' } },
    { data: { source: 'anatoly', target: 'daniil', type: 'child' } },

    // Туранины
    { data: { source: 'iraida_t', target: 'anatoly_t', type: 'child' } },
    { data: { source: 'anatoly_t', target: 'anfisa', type: 'married' } },
    { data: { source: 'anatoly_t', target: 'viktor_t', type: 'child' } },
    { data: { source: 'anatoly_t', target: 'lyubov', type: 'child' } },

    // Михновец
    { data: { source: 'nikolay_m', target: 'marta_m', type: 'married' } },
    { data: { source: 'nikolay_m', target: 'mikhail_m', type: 'child' } },
    { data: { source: 'nikolay_m', target: 'ignat_m', type: 'child' } },
    { data: { source: 'mikhail_m', target: 'klavdia_m', type: 'married' } },
    { data: { source: 'mikhail_m', target: 'sergey_m', type: 'child' } },
    { data: { source: 'mikhail_m', target: 'evgeny_m', type: 'child' } },

    // Хлусовы
    { data: { source: 'ivan_h', target: 'pelageya', type: 'married' } },
    { data: { source: 'ivan_h', target: 'klavdia_m', type: 'child' } },

    // Беловы
    { data: { source: 'ivan_b', target: 'olga', type: 'married' } },
    { data: { source: 'ivan_b', target: 'nikolay_b', type: 'child' } },
    { data: { source: 'ivan_b', target: 'mikhail_b', type: 'child' } },
    { data: { source: 'nikolay_b', target: 'antonina', type: 'married' } },
    { data: { source: 'nikolay_b', target: 'svetlana', type: 'child' } },
    { data: { source: 'nikolay_b', target: 'dmitry_b', type: 'child' } },

    // Фигуровы
    { data: { source: 'irinya_f', target: 'petr_f', type: 'child' } }, 
    { data: { source: 'petr_f', target: 'maria_f', type: 'married' } },
    { data: { source: 'petr_f', target: 'antonina', type: 'child' } },
    { data: { source: 'petr_f', target: 'nina_m', type: 'child' } },
    { data: { source: 'petr_f', target: 'zoya', type: 'child' } },
    { data: { source: 'petr_f', target: 'valentina_p', type: 'child' } },
    { data: { source: 'petr_f', target: 'ekaterina_k', type: 'child' } }
];

// ============================================================
// 3. ЭКОНОМИКА
// ============================================================
const econData = [
    {
        title: "Судостроительный завод «Янтарь»",
        text: "Самый массовый вклад в промышленность. Члены семьи работали на заводе десятилетиями: Сергей Михновец (сборщик КМС), Михаил Михновец (крановщик, слесарь), Клавдия Михновец (маляр, 52 года стажа), Евгений Михновец (рабочий завода)."
    },
    {
        title: "Завод ЖБИ-1 (Железобетонные изделия)",
        text: "Обеспечение стройки региона материалами. Здесь работали: Антонина Белова (плановик) и Николай Белов (водитель)."
    },
    {
        title: "Сельское хозяйство и рыболовство",
        text: "Обеспечение продовольственной безопасности. Любовь Булыгина работала в Мамоновском зверосовхозе, Клавдия Булыгина — в совхозе. Николай Белов в 1970-х ходил в моря на рыболовных судах."
    },
    {
        title: "Рыбоконсервный комбинат",
        text: "Борис Булыгин (участник ВОВ) после войны работал на рыбоконсервном комбинате в Мамоново в тарном цеху."
    },
    {
        title: "Финансовый сектор и инфраструктура",
        text: "Современный вклад. Юлия Булыгина работает специалистом операционного отдела в Энерготрансбанке. Светлана Михновец работала диспетчером на ПАП (пассажирские автоперевозки)."
    },
    {
        title: "Ликвидация техногенных катастроф",
        text: "Владимир Булыгин, проживавший в Мамоново, принимал участие в ликвидации последствий аварии на Чернобыльской АЭС, что является важным вкладом в безопасность страны."
    }
];

function renderEconList() {
    const container = document.getElementById('econ-list');
    container.innerHTML = '';
    econData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'econ-card';
        card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
        container.appendChild(card);
    });
}

// ============================================================
// 4. ОТРИСОВКА ДРЕВА
// ============================================================
const elements = {
    nodes: people,
    edges: relationships.map(rel => {
        if (rel.data.type === 'married') return { data: { source: rel.data.source, target: rel.data.target }, classes: 'married' };
        return { data: { source: rel.data.source, target: rel.data.target }, classes: 'child' };
    })
};

const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: elements,
    style: [
        {
            selector: 'node',
            style: {
                'background-color': '#e0e0e0', // Серый фон для дефолтной иконки
                'background-image': 'data(image)',
                'background-fit': 'cover',
                'label': 'data(label)',
                'color': '#1b5e20',
                'text-valign': 'bottom',
                'text-halign': 'center',
                'text-margin-y': 4,
                'font-size': '10px',
                'font-weight': 'bold',
                'text-outline-color': '#ffffff',
                'text-outline-width': 2,
                'width': '65px',
                'height': '65px',
                'shape': 'ellipse',
                'text-wrap': 'wrap',
                'text-max-width': '85px',
                'border-width': 2,
                'border-color': '#81c784'
            }
        },
        {
            selector: 'node[local = "yes"]',
            style: { 'border-width': 4, 'border-color': '#ffb300', 'background-color': '#fff8e1' }
        },
        {
            selector: 'node:selected',
            style: { 'border-width': 6, 'border-color': '#ff6f00' }
        },
        {
            selector: 'edge.married',
            style: {
                'width': 3,
                'line-color': '#ffb300',
                'line-style': 'dashed',
                'curve-style': 'straight',
                'target-arrow-shape': 'none'
            }
        },
        {
            selector: 'edge.child',
            style: {
                'width': 2,
                'line-color': '#81c784',
                'target-arrow-color': '#81c784',
                'target-arrow-shape': 'triangle',
                'curve-style': 'taxi',
                'taxi-direction': 'downward',
                'taxi-turn': '50%'
            }
        }
    ],
    layout: { 
        name: 'breadthfirst', 
        directed: true, 
        padding: 30, 
        spacingFactor: 1.3,
        avoidOverlap: true
    }
});

// Заменяем пустые картинки на дефолтную серую иконку
cy.nodes().forEach(node => {
    const img = node.data('image');
    if (!img) {
        node.data('image', DEFAULT_AVATAR);
    }
});

cy.on('tap', 'node', function (evt) {
    const data = evt.target.data();
    // В карточке тоже проверяем фото
    const cardImage = (data.image === DEFAULT_AVATAR) ? null : data.image;
    showInfoCard(data.label.replace(/\n/g, ' '), cardImage, data.info);
});

function showInfoCard(title, image, info) {
    const old = document.getElementById('info-card');
    if (old) old.remove();

    const card = document.createElement('div');
    card.id = 'info-card';
    
    // Если фото нет (или это дефолтная), показываем серый блок вместо картинки
    let imgHTML = '';
    if (image) {
        imgHTML = `<img src="${image}" alt="${title}">`;
    } else {
        imgHTML = `<div style="width:100%; height:150px; background:#e0e0e0; border-radius:8px; margin-bottom:10px; display:flex; align-items:center; justify-content:center; color:#888;">Нет фотографии</div>`;
    }

    card.innerHTML = `
        <button class="close-btn" onclick="this.parentElement.remove()">×</button>
        ${imgHTML}
        <h2>${title}</h2>
        <p>${info || 'Описание пока не добавлено.'}</p>
    `;
    document.body.appendChild(card);
}

// ============================================================
// 5. ВКЛАДКИ
// ============================================================
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(el => el.classList.remove('active'));

    if (tabName === 'tree') {
        document.getElementById('tab-tree').classList.add('active');
        document.getElementById('btn-tree').classList.add('active');
        cy.resize(); 
    } else if (tabName === 'econ') {
        document.getElementById('tab-econ').classList.add('active');
        document.getElementById('btn-econ').classList.add('active');
    }
}

renderEconList();