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

document.addEventListener('DOMContentLoaded', () => {

    // Logique pour la carte du monde interactive
    if (document.querySelector('.map-container')) {
        
        const destinations = {
            fakarava: { title: "Fakarava, Polynésie", text: "Un atoll classé réserve de biosphère par l'UNESCO, célèbre pour son 'mur de requins'.", image: "img/destinations/fakarava.jpg" },
            tikehau: { title: "Tikehau, Polynésie", text: "Surnommé 'l'île au sable rose', cet atoll est un havre de paix et l'un des plus poissonneux au monde.", image: "img/destinations/tikehau.jpg" },
            rangiroa: { title: "Rangiroa, Polynésie", text: "Un des plus grands atolls du monde, idéal pour les plongées dérivantes et les rencontres avec les dauphins.", image: "img/destinations/rangiroa.jpg" },
            tuamotu: { title: "Archipel des Tuamotu", text: "Un collier de 77 atolls coralliens. Explorez des îles isolées et des plages désertes.", image: "img/destinations/tuamotu.jpg" },
            newyork: { title: "New York, USA", text: "La ville qui ne dort jamais. De Central Park à Times Square, une énergie unique vous attend.", image: "img/destinations/newyork.jpg" },
            californie: { title: "Californie, USA", text: "Un road trip mythique, des parcs de Yosemite aux plages de Los Angeles.", image: "img/destinations/californie.jpg" },
            quebec: { title: "Québec, Canada", text: "Découvrez le charme de l'histoire européenne en Amérique du Nord et ses grands parcs nationaux.", image: "img/destinations/quebec.jpg" },
            japon: { title: "Kyoto, Japon", text: "Plongez au cœur du Japon traditionnel avec ses temples millénaires et ses jardins zen.", image: "img/destinations/japon.jpg" },
            islande: { title: "Islande", text: "La terre de glace et de feu. Admirez les aurores boréales, les geysers et des paysages surnaturels.", image: "img/destinations/islande.jpg" },
            costarica: { title: "Costa Rica", text: "Un sanctuaire de la biodiversité. Explorez des forêts tropicales luxuriantes et des volcans actifs.", image: "img/destinations/costarica.jpg" },
            perou: { title: "Machu Picchu, Pérou", text: "Découvrez l'ancienne cité inca perchée dans les Andes. Une merveille du monde.", image: "img/destinations/perou.jpg" },
            tanzanie: { title: "Serengeti, Tanzanie", text: "Vivez un safari inoubliable au cœur de la grande migration des gnous et des zèbres.", image: "img/destinations/tanzanie.jpg" },
            italie: { title: "Côte Amalfitaine, Italie", text: "Des villages colorés accrochés à flanc de falaise surplombant la Méditerranée.", image: "img/destinations/italie.jpg" },
            vietnam: { title: "Baie d'Ha Long, Vietnam", text: "Naviguez à travers des milliers de pains de sucre karstiques émergeant d'une eau émeraude.", image: "img/destinations/vietnam.jpg" },
            maroc: { title: "Marrakech, Maroc", text: "Perdez-vous dans les souks animés, les palais somptueux et les jardins luxuriants de la ville rouge.", image: "img/destinations/maroc.jpg" },
            argentine: { title: "Patagonie, Argentine", text: "Explorez des glaciers majestueux, des montagnes acérées et des steppes infinies au bout du monde.", image: "img/destinations/argentine.jpg" },
            grece: { title: "Santorin, Grèce", text: "Admirez des couchers de soleil spectaculaires depuis des villages blancs aux coupoles bleues.", image: "img/destinations/grece.jpg" }
        };

        const mapContainer = document.querySelector('.map-container');
        const infoPanel = document.querySelector('.destination-info-panel');

        for (const id in destinations) {
            const dest = destinations[id];
            const dot = document.createElement('div');
            dot.classList.add('location-dot');
            dot.dataset.destination = id; // On assigne l'ID pour que le CSS puisse le positionner
            
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
});
