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


// Logique pour la carte du monde interactive (pour la page destinations.html)
// Ce code ne s'exécute que si la carte est présente sur la page.
if (document.getElementById('world-map')) {
    
    // Base de données des destinations (facile à modifier)
    const destinations = {
        fakarava: {
            title: "Fakarava, Polynésie",
            text: "Un atoll classé réserve de biosphère par l'UNESCO. C'est le paradis des plongeurs, célèbre pour son 'mur de requins' et sa faune marine exceptionnelle."
        },
        tikehau: {
            title: "Tikehau, Polynésie",
            text: "Surnommé 'l'île au sable rose', cet atoll est un havre de paix. Ses lagons sont parmi les plus poissonneux au monde, une expérience inoubliable."
        },
        rangiroa: {
            title: "Rangiroa, Polynésie",
            text: "L'un des plus grands atolls du monde. Idéal pour les plongées dérivantes et les rencontres avec les dauphins, les raies manta et les requins."
        },
        tuamotu: {
            title: "Archipel des Tuamotu",
            text: "Un collier de 77 atolls coralliens. Explorez des îles isolées, des fermes perlières et des plages désertes d'une beauté à couper le souffle."
        },
        newyork: {
            title: "New York, USA",
            text: "La ville qui ne dort jamais. De Central Park aux lumières de Times Square, une énergie unique et des sites emblématiques à chaque coin de rue."
        },
        californie: {
            title: "Californie, USA",
            text: "Un road trip mythique vous attend, des parcs nationaux de Yosemite et Sequoia aux plages de Los Angeles et au Golden Gate Bridge de San Francisco."
        },
        quebec: {
            title: "Québec, Canada",
            text: "Découvrez le charme de l'histoire européenne en Amérique du Nord. Explorez le Vieux-Québec, les grands parcs nationaux et la culture francophone vibrante."
        },
        japon: {
            title: "Kyoto, Japon",
            text: "Plongez au cœur du Japon traditionnel. Visitez des temples millénaires, des jardins zen et le quartier des geishas de Gion."
        },
        islande: {
            title: "Islande",
            text: "La terre de glace et de feu. Admirez les aurores boréales, les geysers, les volcans et des paysages d'une beauté surnaturelle."
        },
        costarica: {
            title: "Costa Rica",
            text: "Un sanctuaire de la biodiversité. Explorez des forêts tropicales luxuriantes, des volcans actifs et des plages protégées. Pura Vida !"
        }
    };

    const dots = document.querySelectorAll('.location-dot');
    const infoPanel = document.querySelector('.destination-info-panel');
    const initialInfo = document.getElementById('info-initial');

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            // Retire la classe active de tous les points
            dots.forEach(d => d.classList.remove('active'));
            // Ajoute la classe active au point cliqué
            dot.classList.add('active');

            const destinationId = dot.dataset.destination;
            const destinationData = destinations[destinationId];
            
            // Cache tous les contenus
            infoPanel.querySelectorAll('.info-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Crée le nouveau contenu s'il n'existe pas
            let newContent = document.getElementById(`info-${destinationId}`);
            if (!newContent) {
                newContent = document.createElement('div');
                newContent.id = `info-${destinationId}`;
                newContent.classList.add('info-content');
                newContent.innerHTML = `<h3>${destinationData.title}</h3><p>${destinationData.text}</p>`;
                infoPanel.appendChild(newContent);
            }
            
            // Affiche le nouveau contenu avec une petite transition
            setTimeout(() => {
                newContent.classList.add('active');
            }, 50);
        });
    });
}
