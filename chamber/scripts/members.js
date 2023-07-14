$(document).ready(function() {
    // Cargar el archivo JSON
    $.getJSON('data/members.json', function(data) {
        // Filtrar los miembros con nivel de membresía Silver o Gold
        var qualifiedMembers = data.members.filter(function(member) {
            return member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold';
        });

        // Obtener de forma aleatoria los miembros para los espacios de spotlight
        var randomMembers = getRandomMembers(qualifiedMembers, 3);

        // Insertar los datos en los espacios de spotlight
        $('.spotlight-1').html(getMemberHTML(randomMembers[0]));
        $('.spotlight-2').html(getMemberHTML(randomMembers[1]));
        $('.spotlight-3').html(getMemberHTML(randomMembers[2]));
    });

    // Función para obtener miembros de forma aleatoria
    function getRandomMembers(array, count) {
        var shuffled = array.sort(function() { return 0.5 - Math.random(); });
        return shuffled.slice(0, count);
    }

    // Función para generar el HTML del miembro
    function getMemberHTML(member) {
        var html = '<h2>' + member.name + '</h2>';
        html += '<p>Address: ' + member.address + '</p>';
        html += '<p>Phone: ' + member.phone + '</p>';
        html += '<p>Website: <a href="' + member.website + '">' + member.website + '</a></p>';
        html += '<img src="' + member.image + '" alt="' + member.name + '">';
        return html;
    }
});