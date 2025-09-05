// Initialisation du carrousel SwiperJS (pour les pages articles)
// Ce code ne s'exécute que si un carrousel est présent sur la page.
if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


// Initialisation du carrousel SwiperJS (pour les pages articles)
if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// On s'assure que le code s'exécute quand la page est prête
document.addEventListener('DOMContentLoaded', () => {

    // Logique pour la carte du monde interactive
    if (document.querySelector('.map-container')) {
        
        const destinations = {
            // Polynésie
            fakarava: { x: 24, y: 62, title: "Fakarava, Polynésie", text: "Un atoll classé réserve de biosphère par l'UNESCO, célèbre pour son 'mur de requins'.", image: "img/destinations/fakarava.jpg" },
            tikehau: { x: 24.5, y: 60, title: "Tikehau, Polynésie", text: "Surnommé 'l'île au sable rose', cet atoll est un havre de paix et l'un des plus poissonneux au monde.", image: "img/destinations/tikehau.jpg" },
            rangiroa: { x: 25, y: 61, title: "Rangiroa, Polynésie", text: "Un des plus grands atolls du monde, idéal pour les plongées dérivantes et les rencontres avec les dauphins.", image: "img/destinations/rangiroa.jpg" },
            tuamotu: { x: 25.5, y: 63, title: "Archipel des Tuamotu", text: "Un collier de 77 atolls coralliens. Explorez des îles isolées et des plages désertes.", image: "img/destinations/tuamotu.jpg" },
            
            // Amérique du Nord
            newyork: { x: 28, y: 35, title: "New York, USA", text: "La ville qui ne dort jamais. De Central Park à Times Square, une énergie unique vous attend.", image: "img/destinations/newyork.jpg" },
            californie: { x: 18, y: 40, title: "Californie, USA", text: "Un road trip mythique, des parcs de Yosemite aux plages de Los Angeles.", image: "img/destinations/californie.jpg" },
            quebec: { x: 30, y: 30, title: "Québec, Canada", text: "Découvrez le charme de l'histoire européenne en Amérique du Nord et ses grands parcs nationaux.", image: "img/destinations/quebec.jpg" },

            // 10 Nouvelles destinations
            japon: { x: 84, y: 38, title: "Kyoto, Japon", text: "Plongez au cœur du Japon traditionnel avec ses temples millénaires et ses jardins zen.", image: "img/destinations/japon.jpg" },
            islande: { x: 47, y: 18, title: "Islande", text: "La terre de glace et de feu. Admirez les aurores boréales, les geysers et des paysages surnaturels.", image: "img/destinations/islande.jpg" },
            costarica: { x: 25, y: 52, title: "Costa Rica", text: "Un sanctuaire de la biodiversité. Explorez des forêts tropicales luxuriantes et des volcans actifs.", image: "img/destinations/costarica.jpg" },
            perou: { x: 28, y: 65, title: "Machu Picchu, Pérou", text: "Découvrez l'ancienne cité inca perchée dans les Andes. Une merveille du monde.", image: "img/destinations/perou.jpg" },
            tanzanie: { x: 58, y: 58, title: "Serengeti, Tanzanie", text: "Vivez un safari inoubliable au cœur de la grande migration des gnous et des zèbres.", image: "img/destinations/tanzanie.jpg" },
            italie: { x: 52, y: 35, title: "Côte Amalfitaine, Italie", text: "Des villages colorés accrochés à flanc de falaise surplombant la Méditerranée.", image: "img/destinations/italie.jpg" },
            vietnam: { x: 78, y: 48, title: "Baie d'Ha Long, Vietnam", text: "Naviguez à travers des milliers de pains de sucre karstiques émergeant d'une eau émeraude.", image: "img/destinations/vietnam.jpg" },
            maroc: { x: 48, y: 42, title: "Marrakech, Maroc", text: "Perdez-vous dans les souks animés, les palais somptueux et les jardins luxuriants de la ville rouge.", image: "img/destinations/maroc.jpg" },
            argentine: { x: 32, y: 80, title: "Patagonie, Argentine", text: "Explorez des glaciers majestueux, des montagnes acérées et des steppes infinies au bout du monde.", image: "img/destinations/argentine.jpg" },
            grece: { x: 55, y: 38, title: "Santorin, Grèce", text: "Admirez des couchers de soleil spectaculaires depuis des villages blancs aux coupoles bleues.", image: "img/destinations/grece.jpg" }
        };

        const mapContainer = document.querySelector('.map-container');
        const infoPanel = document.querySelector('.destination-info-panel');

        for (const id in destinations) {
            const dest = destinations[id];
            const dot = document.createElement('div');
            dot.classList.add('location-dot');
            dot.style.left = `${dest.x}%`;
            dot.style.top = `${dest.y}%`;
            
            dot.addEventListener('click', () => {
                mapContainer.querySelectorAll('.location-dot').forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                
                infoPanel.innerHTML = `
                    <div class="info-content active">
                        <img src="${dest.image}" alt="${dest.title}" class="destination-image">
                        <div class="info-text">
                            <h3>${dest.title}</h3>
                            <p>${dest.text}</p>
                        </div>
                    </div>
                `;
            });

            mapContainer.appendChild(dot);
        }
    }
});```

---

### **Étape 3 : Fichier `css/style.css` (Final)**

Remplacez la section des styles pour la page carte par celle-ci. Ce code fait tout le travail visuel : il affiche l'image de la carte, positionne les points dessus et stylise le panneau d'information avec l'image.


