// Different types of events
const eliminatoryEvents1 = [
    (player, pronouns) => `${player} é capturad${pronouns.object} por um grupo de Slorgs e é eliminad${pronouns.object}!`,
    (player, pronouns) => `${player} enfrenta uma matilha de Faellies na Central de Neopia e não sobrevive!`,
    (player, pronouns) => `${player} se perde nas tumbas de Geraptiku e é eliminad${pronouns.object}!`,
    (player, pronouns) => `${player} é atacad${pronouns.object} por um grupo de Kadoaties famintos na Central de Neopia e não escapa!`,
    (player, pronouns) => `${player} é surpreendid${pronouns.object} por um ataque de Scorchios na Ilha do Mistério e não sobrevive!`,
    (player, pronouns) => `${player} não sobrevive a uma tempestade de areia no Deserto Perdido.`,
    (player, pronouns) => `${player} é encurralad${pronouns.object} por um grupo de Grarrls em Tyrannia e não consegue escapar!`,
    (player, pronouns) => `${player} é atacad${pronouns.object} por um grupo de Pteris famintos em Tyrannia e é eliminad${pronouns.object}!`,
    (player, pronouns) => `${player} é atacad${pronouns.object} por Jhudoras Bodyguards e não sobrevive!`,
    (player, pronouns) => `${player} tropeça e cai na Piscina de Magma em Moltara, sendo eliminado${pronouns.object}!`,
    (player, pronouns) => `${player} é atacad${pronouns.object} por um grupo de Werelupes nos Bosques Assombrados e não escapa!`,
    (player, pronouns) => `${player} é pego em uma avalanche na Motanha do Terror e não sobrevive!`,
    (player, pronouns) => `${player} tromba em Dr. Sloth, que ${pronouns.object} extermina sem dar a chance de um pedido de desculpas!`,
    (player, pronouns) => `${player} cai em uma armadilha para Cybunnies e é eliminad${pronouns.object}!`,
    (player, pronouns) => `${player} é surpreendido por Jhudora no Mundo das Fadas e é eliminad${pronouns.object}!`,
    (player, pronouns) => `${player} entala sua cabeça na misteriosa toca de Symol e acaba eliminad${pronouns.object}!`,
    (player, pronouns) => `${player} se perde em uma névoa deixada pela The Darkest Faerie e é eliminad${pronouns.object}!`,
    (player, pronouns) => `${player} é pisotead${pronouns.object} por uma manada de Chombies e não sobrevive!`,
    (player, pronouns) => `${player} é peg${pronouns.object} por uma armadilha de Thieves e é eliminad${pronouns.object}!`,
    (player, pronouns) => `${player} é atacad${pronouns.object} por um grupo de Quiggles e não escapa!`,
    (player, pronouns) => `${player} estoura suas cordas vocais de tanto gritar em uma partida de Vamos Fazer Barulho é eliminad${pronouns.object}!`,
];

const eliminatoryEvents2 = [
    (player1, pronouns1, player2, pronouns2) => `${player1} encontra ${player2} nas Ilhas Krawk e usa a Sword of Skardsen para atacar ${player2}! ${player2} é eliminad${pronouns2.object}!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} usa um feitiço ensinado por Fyora contra ${player2}, que não sobrevive!`,
    (player1, pronouns1, player2, pronouns2) => `${player2} desafia ${player1} para uma batalha! ${player2} é eliminad${pronouns2.object}!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} desafia ${player2} para uma batalha! ${player2} é eliminad${pronouns2.object}!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} acerta a cabeça de ${player2} com a ponta de um Super Nerkmid! ${player2} não sobrevive!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} oferece um Holiday Slushie envenenado para ${player2}, que não sobrevive após beber!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} usa a Espada de Skardsen para atacar ${player2} nos Bosques Assombrados! ${player2} não sobrevive!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} enfrenta ${player2} em uma batalha de rimas na Ilha do Mistério, o perdedor deve ser sacrificado no vulcão. ${player2} perde!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} elimina acidentalmente ${player2} ao tentar demonstrar como utilizar uma Wand of the Dark Faerie`,
    (player1, pronouns1, player2, pronouns2) => `${player1} empurra ${player2} para dentro do Poço dos Desejos, ${pronouns2.object} eliminando!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} tentam invadir a camara de Lord Darigan em busca de armamento. ${player2} é eliminad${pronouns2.object} por um dos guardas`,
    (player1, pronouns1, player2, pronouns2) => `${player1} entrega ${player2} a Dr. Sloth em troca de Neocola Tokens! ${player2} é eliminad${pronouns2.object}!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} usa uma Seasonal Attack Pea contra ${player2} enquanto grita "Merry Christmas"! ${player2} não sobrevive!`,
    (player1, pronouns1, player2, pronouns2) => `${player2} descobre o grande segredo de ${player1} e acaba eliminado por ${pronouns1.subject}!`,
    (player1, pronouns1, player2, pronouns2) => `${player2} tenta emboscar ${player1} na Cidadela de Darigan, mas acaba eliminado pelas mãos d${pronouns1.subject}!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} empurra ${player2} de uma ponte em Shenkuu. ${player2} é eliminad${pronouns2.object}!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} fazem uma aliança, mas após discutirem, ${player1} elimina ${player2}!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} encontra ${player2} na Motanha do Terror e usa Thunder Sticks para atacar ${player2}! ${player2} é eliminad${pronouns2.object}!`,
    (player1, pronouns1, player2, pronouns2) => `${player1} elimina ${player2} após confundi-l${pronouns2.object} com Chiazilla`,
    (player1, pronouns1, player2, pronouns2) => `${player1} enfrenta ${player2} em uma batalha de feitiçaria em Brightvale e ${player2} perde!`,
    (player1, pronouns1, player2, pronouns2) => `Após ${player2} furar a fila da Cozinha do Sopão, ${player1} elimina ${player2} com uma colher de pau.`
];

const eliminatoryEvents3 = [
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player3}, ${player1} e ${player2} enfrentam Snowager em busca de recursos, mas ${player1} acaba devorad${pronouns1.object}!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} se perdem em um labirinto de cristais em Kreludor e ${player1} não consegue escapar!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} se deparam com um grupo de Mutant Kadoaties famintos na Central de Neopia e ${player1} não sobrevive!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player2}, ${player1} e ${player3} são pisoteados por uma manada de Chombies em Tyrannia e ${player1} não sobrevive!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player3}, ${player2} e ${player1} se perdem pelo castelo de Jhudora e ${player1} é eliminad${pronouns1.object} por ela!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player3}, ${player1} e ${player2} se encontram com um grupo de Werelupes nos Bosques Assombrados e ${player1} não sobrevive!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player2}, ${player3} e ${player1} enfrentam uma horda de Grarrls em Tyrannia e ${player1} é eliminad${pronouns1.object}!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} enfrentam um grupo de Darigan Draiks e ${player1} não sobrevive!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} se deparam com uma avalanche na Motanha do Terror e ${player1} é eliminad${pronouns1.object}!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player2}, ${player3} e ${player1} enfrentam um grupo de Snowbunnies na Motanha do Terror e ${player1} não sobrevive!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player3} e ${player2} eliminam ${player1} com Bony Grarrl Clubs`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player2} e ${player3} armam uma emboscada para ${player1}, que não escapa!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player2} e ${player3} lançam ${player1} no vulcão de Ilha do Mistério.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player2} e ${player3} afogam ${player1} na Piscina de Magma.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player2} e ${player3} sabotam as cordas de ${player1} enquanto ele escalava as Montanhas do Terror, que não sobrevive.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player3} e ${player2} treinam um grupo de Grarrls para atacar ${player1}, que é eliminado.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player2} e ${player3} emboscam ${player1} em uma das tumbas de Qasala e ${pronouns1.object} elimina.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player3}, ${player1} e ${player2} se deparam com um Snow Beast e ${player1} não escapa!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} faziam manobras com espadas nas Ilhas Krawk, quando ${player1} acaba se eliminando!`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player3}, ${player1} e ${player2} se unem para atacar Dr. Sloth, mas ${player1} não sobrevive!`
];

const standardEvents1 = [
    (player, pronouns) => `${player} vê uma estranha luz em Shenkuu e decide investigar, sem encontrar nada.`,
    (player, pronouns) => `${player} visita o Mundo das Fadas e mergulha nas Águas Curativas para curar-se.`,
    (player, pronouns) => `${player} encontra um objeto misterioso nos Bosques Assombrados e decide guardar para mais tarde.`,
    (player, pronouns) => `${player} encontra um Pincel Invisível e pensa em usa-lo a seu favor.`,
    (player, pronouns) => `${player} pisa em um Mote de Estrume enquanto caminha.`,
    (player, pronouns) => `${player} avista soldados do Dr. Sloth se aproximando e se esconde.`,
    (player, pronouns) => `${player} encontra cinco dobrões no chão.`,
    (player, pronouns) => `${player} encontra um mapa antigo na Ilha Lutari e o estuda para procurar mais informações.`,
    (player, pronouns) => `${player} encontra com Koi Warrior e aprende uma nova técnica de combate.`,
    (player, pronouns) => `${player} descobre uma área secreta na Ilha do Mistério e a explora em busca de tesouros.`,
    (player, pronouns) => `${player} encontra um antigo pergaminho em Brightvale e aprende um novo feitiço.`,
    (player, pronouns) => `${player} se depara com um comerciante de poções na Central de Neopia e compra uma Poção de Cura.`,
    (player, pronouns) => `${player} encontra com Jhudora e não exita em pedir uma selfie.`,
    (player, pronouns) => `${player} descobre um atalho na Motanha do Terror e economiza tempo em sua jornada.`,
    (player, pronouns) => `${player} encontra uma pista deixada por um oponente e decide segui-la.`,
    (player, pronouns) => `${player} pechincha por um item em Tyrannia.`,
    (player, pronouns) => `${player} descobre uma caverna secreta em Moltara e a explora.`,
    (player, pronouns) => `${player} encontra um antigo símbolo em Dacardia e o usa para obter um bônus.`,
    (player, pronouns) => `${player} encontra um novo aliado em Altador e decide formar uma aliança.`,
    (player, pronouns) => `${player} descobre um novo truque de magia com Jhudora e o pratica.`,
    (player, pronouns) => `${player} encontra um item especial em Kreludor e o adiciona ao seu inventário.`,
    (player, pronouns) => `${player} vê uma estranha luz na Estação Espacial de Virtupets e decide investigar, mas não encontra nada.`,
];

const standardEvents2 = [
    (player1, pronouns1, player2, pronouns2) => `${player1} discute calorosamente com ${player2} sobre qual a melhor Usuki já lançada.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} têm uma disputa amigável sobre qual edição do Neopian Times mudou o cenário do jornalismo.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} discutem quais páginas do álbum de selos merece um avatar.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} debatem sobre qual a melhor estratégia para vencer uma partida de Kacheek Seek.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} murmuram sobre os valores dos TCGs.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} discordam sobre qual a melhor poção mágica para usar em combate.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} debatem sobre o melhor pet para cuidar de uma possível fazenda de Kois.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} dançam com um grupo de Island Grundos.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} trocam itens de NC.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} têm uma discussão sobre a eficácia dos itens de combate em Brightvale.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} comentam sobre o que esperam das próximas edições da UsukiCon.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} debatem sobre as vantagens dos feitiços de Shenkuu.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} encontram uma pilha de pedras místicas.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} gargalham ao avistarem um Mutant Gnorbu.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} se olham fixamente por alguns segundos, e são interrompidos pela aparição de um Snowbunny.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} dividem recursos e cogitam uma aliança.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} fazem uma batalha de dança.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} relembram as melhores discussões do Neopets Brasil.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} elaboram um plano para tomarem a Ilha Roo.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} gritam sem motivo aparente.`,
    (player1, pronouns1, player2, pronouns2) => `${player1} e ${player2} decidem dividir o mesmo saco de dormir.`
];

const standardEvents3 = [
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1} faz uma aliança com ${player2} e tentam emboscar ${player3} nos Bosques Assombrados, mas sem sucesso.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} se reúnem para planejar a próxima grande aventura nas Ilhas Krawk.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1} e ${player2} formam uma equipe com ${player3} para explorar as cavernas de Brightvale.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} formam uma equipe para competição de Kacheek Seek.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} se reúnem para organizar uma competição de poesia na Central de Neopia.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1} e ${player2} decidem se unir para enfrentar ${player3}, que foge ao perceber.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1} e ${player2} convencem ${player3} de que é preciso se unirem contra o Dr. Sloth.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1} e ${player2} dormiam abraçados, quando ${player3} aparece e fica confus${pronouns3.object} com a cena.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} formam uma equipe para explorarem as profundezas de Maraqua.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1} estapeia ${player2}, ${player3} tenta apaziguar a discussão.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1} segura ${player2} pelas mãos e o afasta de ${player3} que estava acompanhado de um Swamp Gas Kiko.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} comemoram ao encontrarem a Fonte do Arco-Iris ativa.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1} e ${player2} seguram ${player3} e o expõe ao raio do laboratório secreto.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1} coloca ${player2} contra ${player3} ao contar mentiras sobre um ocorrido entre eles em uma balada em Tyrannia.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} decidem nadar no Lago Kiko sem roupas, e são surpreendidos por um grupo de Kikos agressivos.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} formam uma equipe para enfrentar um grupo de Snowbunnies na Motanha do Terror.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} se reúnem para criar novas estratégias de combate em Meridell.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1} e ${player2} tentam empurrar ${player3} na Piscina de Magma, mas ${player3} consegue escapar.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} caçam para alimentar um grupo de Kadoaties.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3) => `${player1}, ${player2} e ${player3} questionam se Blumaroo Steak é realmente feito de Blumaroos.`,
];

const standardEvents4 = [
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} encontram ${player3} e ${player4} e sugerem formar uma banda cover de M*YNCI.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} organizam uma competição de Cheeseroller com ${player3} e ${player4}.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} se encontram com ${player3} e ${player4} e decidem montar um novo time para a Copa de Altador.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} convidam ${player3} e ${player4} para uma caça ao tesouro na Ilha do Mistério.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} desafiam ${player3} e ${player4} para uma batalha de Petpets.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} se juntam a ${player3} e ${player4} para explorar as ruínas de Geraptiku.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} convidam ${player3} e ${player4} para uma competição de pesca em Maraqua.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} formam uma equipe com ${player3} e ${player4} para colherem neggs.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} encontram ${player3} e ${player4} e decidem disputar uma partida de Yooyuball em Altador.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} convidam ${player3} e ${player4} para um piquenique em Meridell.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} competem contra ${player3} e ${player4} em uma corrida de obstáculos no Deserto Perdido.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} formam uma aliança com ${player3} e ${player4} para enfrentar os perigos da Cidadela de Darigan.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} se juntam a ${player3} e ${player4} para explorarem a misteriosa Ilha Lutari.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} encontram ${player3} e ${player4} e decidem formar uma equipe para enfrentar o Pant Devil.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} fazem uma trégua com ${player3} e ${player4} para caçarem por outros oponentes.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} desafiam ${player3} e ${player4} para um duelo de Fashion Fever.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} organizam um festival de música em Tyrannia com a ajuda de ${player3} e ${player4}.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} encontram ${player3} e ${player4} e decidem criar uma nova guilda no Mundo das Fadas.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} se unem a ${player3} e ${player4} para tietarem Fyora na entrada da Torra Oculta.`,
    (player1, pronouns1, player2, pronouns2, player3, pronouns3, player4, pronouns4) => `${player1} e ${player2} competem contra ${player3} e ${player4} em um concurso de culinária em Shenkuu.`
];