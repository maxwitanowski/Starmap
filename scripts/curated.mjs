// Curated real-world data for well-known objects: distances (pc) that OpenNGC lacks,
// common names, and short descriptions. Keys are normalised catalog names (no spaces,
// no leading zeros): NGC1952, IC434, M45 ...
// Distances follow the values commonly quoted in the literature (SIMBAD / NED / recent papers).

// name|distance_pc|common name|description
const MESSIER_TXT = `
NGC1952|2000|Crab Nebula|Remnant of the supernova recorded by Chinese astronomers in 1054. A pulsar spinning 30 times a second sits at its heart and powers the glowing filaments.
NGC7089|11500||Rich globular cluster in Aquarius, one of the largest known, about 175 light-years across.
NGC5272|10400||Globular cluster with roughly half a million stars and an unusually large population of variable stars.
NGC6121|1860||One of the closest globular clusters to the Sun. It was the first globular in which individual stars were resolved and contains a millisecond pulsar.
NGC5904|7500||Bright globular cluster in Serpens, about 13 billion years old.
NGC6405|490|Butterfly Cluster|Open cluster whose brightest stars trace a butterfly shape; the orange variable BM Scorpii marks one wing.
NGC6475|300|Ptolemy Cluster|Bright naked-eye open cluster in the tail of Scorpius, recorded by Ptolemy in 130 AD.
NGC6523|1250|Lagoon Nebula|Giant emission nebula and star-forming region in Sagittarius, crossed by a dark lane that gives it its name.
NGC6333|7900||Globular cluster near the galactic centre direction, partly obscured by dust.
NGC6254|4400||Globular cluster in Ophiuchus, about 80 light-years across.
NGC6705|1900|Wild Duck Cluster|One of the richest and most compact open clusters, with about 2,900 stars.
NGC6218|4800||Loosely concentrated globular cluster in Ophiuchus.
NGC6205|6800|Great Hercules Cluster|Spectacular globular cluster of several hundred thousand stars. Target of the 1974 Arecibo message.
NGC6402|9300||Globular cluster in Ophiuchus with a slightly elliptical shape.
NGC7078|10000||Very dense globular cluster whose core may have undergone core collapse; it hosts a planetary nebula and X-ray binaries.
NGC6611|1740|Eagle Nebula|Young open cluster embedded in an emission nebula, home of the Pillars of Creation photographed by Hubble.
NGC6618|1500|Omega Nebula|Also called the Swan Nebula. A bright HII region with a young cluster of about 35 hot stars.
NGC6613|1300||Small, sparse open cluster in Sagittarius.
NGC6273|8800||Globular cluster with the most oblate shape of any known.
NGC6514|1250|Trifid Nebula|Emission, reflection and dark nebula in one: pink hydrogen glow split into three lobes by dark dust lanes, with a blue reflection nebula above.
NGC6531|1250||Small open cluster near the Trifid Nebula.
NGC6656|3200||One of the brightest globular clusters in the sky and one of the nearest. Contains two black holes and a planetary nebula.
NGC6494|640||Open cluster of about 150 stars in Sagittarius.
IC4715|3000|Sagittarius Star Cloud|Not a true cluster but a window through interstellar dust into the Sagittarius-Carina arm of the Milky Way.
IC4725|620||Open cluster containing the Cepheid variable U Sagittarii.
NGC6694|1600||Open cluster in Scutum partially obscured by a dust cloud.
NGC6853|380|Dumbbell Nebula|Bright planetary nebula, the first ever discovered (Messier, 1764). The dying central star is a hot white dwarf.
NGC6626|5500||Globular cluster in Sagittarius containing 12 millisecond pulsars.
NGC6913|1150||Sparse open cluster in Cygnus.
NGC7099|8100||Core-collapsed globular cluster in Capricornus with a retrograde orbit in the Galaxy.
NGC224|765000|Andromeda Galaxy|The nearest large spiral galaxy and the most distant object visible to the naked eye. About one trillion stars, 220,000 light-years across; it will merge with the Milky Way in about 4.5 billion years.
NGC221|763000||Compact elliptical satellite of Andromeda with a supermassive black hole of 2.5 million solar masses.
NGC598|840000|Triangulum Galaxy|Third-largest member of the Local Group, a face-on spiral rich in star formation, gravitationally bound to Andromeda.
NGC1039|470||Bright open cluster in Perseus, roughly 200 million years old.
NGC2168|850||Open cluster in Gemini spanning the apparent size of the full Moon.
NGC1960|1330||Young open cluster in Auriga, about 25 million years old.
NGC2099|1400||Richest open cluster in Auriga with over 500 stars.
NGC1912|1070||Open cluster in Auriga whose bright stars form a rough cross.
NGC7092|310||Loose open cluster in Cygnus, visible to the naked eye.
NGC2287|710||Open cluster in Canis Major containing several red giants.
NGC1976|412|Orion Nebula|The nearest massive star-forming region, a stellar nursery 24 light-years across lit by the Trapezium cluster. Visible to the naked eye as the middle of Orion's sword.
NGC1982|412|De Mairan's Nebula|Part of the Orion Nebula complex, separated from M42 by a dark dust lane.
NGC2632|187|Beehive Cluster|Praesepe. One of the nearest open clusters, about 600 million years old, with over 1,000 stars.
NGC2437|1500||Rich open cluster in Puppis with a planetary nebula (NGC 2438) superimposed on it.
NGC2422|490||Bright open cluster in Puppis, visible to the naked eye.
NGC2548|770||Open cluster in Hydra, about 300 million years old.
NGC4472|17100000||Brightest galaxy of the Virgo Cluster, a giant elliptical with about 6,000 globular clusters.
NGC2323|1000||Open cluster in Monoceros.
NGC5194|8600000|Whirlpool Galaxy|Classic grand-design spiral interacting with its companion NGC 5195. Its spiral arms are enhanced by the tidal encounter.
NGC7654|1400||Open cluster in Cassiopeia near the Bubble Nebula.
NGC5024|17900||Metal-poor globular cluster far out in the galactic halo.
NGC6715|26700||Globular cluster that belongs to the Sagittarius Dwarf Galaxy, not the Milky Way. It may host an intermediate-mass black hole.
NGC6809|5300||Loose globular cluster in Sagittarius.
NGC6779|10000||Globular cluster in Lyra with a retrograde orbit, possibly captured from a dwarf galaxy.
NGC6720|790|Ring Nebula|Famous planetary nebula: a barrel of expelled gas seen end-on, glowing around a hot white dwarf of about 120,000 K.
NGC4579|19000000||Barred spiral galaxy in the Virgo Cluster with a low-luminosity active nucleus.
NGC4621|18000000||Elliptical galaxy in the Virgo Cluster.
NGC4649|17000000||Giant elliptical galaxy in Virgo, one of the largest, hosting a 4.5-billion-solar-mass black hole.
NGC4303|16000000||Face-on barred spiral in Virgo, notable for its frequent supernovae.
NGC6266|6800||Globular cluster near the galactic centre with many X-ray binaries.
NGC5055|8900000|Sunflower Galaxy|Flocculent spiral galaxy whose patchy arms resemble sunflower petals.
NGC4826|5300000|Black Eye Galaxy|Spiral with a spectacular dark dust band in front of its nucleus. Its outer gas rotates opposite to the inner disk, evidence of a past merger.
NGC3623|10700000||Member of the Leo Triplet, a spiral seen at a steep angle.
NGC3627|11000000||Barred spiral in the Leo Triplet, distorted by interactions with its neighbours.
NGC2682|850||One of the oldest open clusters known, about 4 billion years old, with stars similar to the Sun.
NGC4590|10300||Globular cluster in Hydra.
NGC6637|8800||Globular cluster in Sagittarius.
NGC6681|9000||Globular cluster with a collapsed core.
NGC6838|4000||Loose globular cluster once thought to be an open cluster.
NGC6981|16700||Globular cluster in Aquarius.
NGC6994|600||Asterism of four unrelated stars, catalogued by Messier as a cluster.
NGC628|9800000|Phantom Galaxy|Grand-design face-on spiral, a favourite JWST target showing its dusty spiral skeleton.
NGC6864|20500||Compact, distant globular cluster in Sagittarius.
NGC650|780|Little Dumbbell Nebula|Bipolar planetary nebula in Perseus, one of the faintest Messier objects.
NGC1068|14400000|Cetus A|Prototype Seyfert galaxy, a barred spiral with a brilliant active nucleus powered by a supermassive black hole.
NGC2068|415||Brightest reflection nebula in the sky, part of the Orion molecular cloud, lit by two hot B-type stars.
NGC1904|12600||Globular cluster in Lepus, possibly stripped from the Canis Major dwarf galaxy.
NGC6093|10000||Dense globular cluster in Scorpius, site of a nova in 1860.
NGC3031|3600000|Bode's Galaxy|Bright grand-design spiral with a 70-million-solar-mass black hole. Interacting with M82 and NGC 3077.
NGC3034|3500000|Cigar Galaxy|Prototype starburst galaxy, forming stars ten times faster than the Milky Way after an encounter with M81. A superwind of hot gas streams from its core.
NGC5236|4600000|Southern Pinwheel|Nearby barred spiral seen nearly face-on, one of the most prolific supernova producers known.
NGC4374|18400000||Giant elliptical in the Virgo Cluster core with radio jets from its active nucleus.
NGC4382|18400000||Lenticular galaxy in Virgo showing signs of a recent merger.
NGC4406|15900000||Giant elliptical in Virgo moving toward us as it falls through the cluster, stripping gas as it goes.
NGC4486|16400000|Virgo A|Supergiant elliptical galaxy with a 6.5-billion-solar-mass black hole, the first ever imaged (Event Horizon Telescope, 2019). A 5,000-light-year relativistic jet shoots from its core.
NGC4501|14400000||Bright spiral in the Virgo Cluster with a Seyfert nucleus.
NGC4552|15400000||Elliptical galaxy in Virgo.
NGC4569|18000000||Spiral galaxy in Virgo with an anaemic, gas-stripped disk.
NGC4548|19000000||Barred spiral in the Virgo Cluster.
NGC6341|8300||One of the oldest globular clusters, about 14 billion years old, with very low metallicity.
NGC2447|1040||Open cluster in Puppis.
NGC4736|4800000||Spiral galaxy with a bright starburst ring around its nucleus.
NGC3351|10000000||Barred spiral in the Leo I group with a star-forming circumnuclear ring.
NGC3368|9600000||Intermediate spiral in the Leo I group with an active nucleus.
NGC3587|620|Owl Nebula|Planetary nebula whose two dark patches look like an owl's eyes.
NGC4192|13600000||Edge-on spiral on the outskirts of the Virgo Cluster.
NGC4254|15000000||Unusual one-armed face-on spiral in Virgo.
NGC4321|16800000||Grand-design spiral in Virgo, one of the brightest cluster members, with many recorded supernovae.
NGC5457|6400000|Pinwheel Galaxy|Large face-on spiral 170,000 light-years across, asymmetric because of encounters with companions.
NGC5866|15000000|Spindle Galaxy|Edge-on lenticular galaxy with a sharp dust lane, likely Messier's M102.
NGC581|3000||Open cluster in Cassiopeia.
NGC4594|9550000|Sombrero Galaxy|Galaxy with a brilliant bulge and a thick dust ring seen nearly edge-on; hosts a billion-solar-mass black hole.
NGC3379|11000000||Standard elliptical galaxy in the Leo I group.
NGC4258|7200000||Spiral with anomalous arms powered by jets from its active nucleus; a key rung on the cosmic distance ladder thanks to water masers.
NGC6171|6400||Globular cluster in Ophiuchus.
NGC3556|14100000||Edge-on barred spiral in Ursa Major.
NGC3992|25600000||Barred spiral galaxy in Ursa Major.
NGC205|824000||Dwarf elliptical satellite of Andromeda with unusual recent star formation.
`;

// Notable non-Messier NGC/IC objects and dark nebulae (Barnard) in OpenNGC.
const NGC_TXT = `
NGC3372|2600|Carina Nebula|One of the largest HII regions in the Galaxy, four times the size of the Orion Nebula. Home of Eta Carinae, a luminous blue variable that may explode as a supernova.
NGC2070|49970|Tarantula Nebula|Colossal star-forming region in the Large Magellanic Cloud, over 600 light-years across, lit by the super star cluster R136.
NGC104|4430|47 Tucanae|Second-brightest globular cluster in the sky with millions of stars packed into a core just a few light-years across.
NGC5139|5200|Omega Centauri|Largest and brightest globular cluster of the Milky Way, about 10 million stars. Possibly the stripped nucleus of a dwarf galaxy.
NGC253|3500000|Sculptor Galaxy|Bright starburst spiral, the largest member of the Sculptor Group.
NGC5128|3800000|Centaurus A|Nearest radio galaxy: a giant elliptical swallowing a spiral, with jets that extend a million light-years.
NGC4565|12000000|Needle Galaxy|Perfect edge-on spiral with a prominent dust lane, a view of what the Milky Way might look like from outside.
NGC891|9100000||Edge-on spiral galaxy strikingly similar to the Milky Way.
NGC7000|795|North America Nebula|Emission nebula shaped like the continent, part of a complex with the Pelican Nebula.
IC5070|600|Pelican Nebula|Emission nebula bordering the North America Nebula with active star formation.
NGC6960|735|Western Veil Nebula|Part of the Cygnus Loop supernova remnant, about 8,000 years old.
NGC6992|735|Eastern Veil Nebula|Bright section of the Cygnus Loop supernova remnant.
NGC6995|735|Eastern Veil Nebula|Section of the Cygnus Loop supernova remnant.
NGC7293|200|Helix Nebula|One of the closest planetary nebulae. Its 'eye' shape is a cylinder of ejected gas seen nearly end-on.
NGC6543|1000|Cat's Eye Nebula|Intricate planetary nebula with concentric shells and knots, studied extensively by Hubble.
NGC7009|1300|Saturn Nebula|Planetary nebula with ansae that resemble Saturn's rings.
NGC2392|2000|Lion Nebula|Double-shell planetary nebula (formerly nicknamed the Eskimo Nebula) with comet-like filaments.
NGC3242|1400|Ghost of Jupiter|Planetary nebula appearing about the size of Jupiter through a telescope.
NGC2237|1600|Rosette Nebula|Large circular HII region whose central cavity was blown out by the young cluster NGC 2244.
NGC2244|1600||Young open cluster excavating the centre of the Rosette Nebula.
NGC2264|830|Christmas Tree Cluster|Cluster and nebula complex that includes the Cone Nebula and the Fox Fur Nebula.
NGC1499|300|California Nebula|Long emission nebula shaped like the state of California, lit by the star Xi Persei.
NGC7635|2400|Bubble Nebula|Shell blown by the stellar wind of a hot massive star, about 7 light-years across.
NGC6888|1500|Crescent Nebula|Bubble blown by the Wolf-Rayet star WR 136 colliding with its earlier red-giant wind.
NGC869|2300|h Persei|Half of the Double Cluster, a pair of young open clusters visible to the naked eye.
NGC884|2300|chi Persei|Half of the Double Cluster in Perseus.
NGC4755|1980|Jewel Box|Brilliant young open cluster of blue supergiants and a red supergiant, about 14 million years old.
NGC3532|490|Wishing Well Cluster|Rich open cluster in Carina, the first target imaged by Hubble.
NGC6231|1600||Young open cluster at the core of the Scorpius OB1 association.
NGC2451|190||Sparse open cluster around the orange giant c Puppis.
NGC2516|410|Southern Beehive|Bright naked-eye open cluster in Carina.
NGC3114|920||Large open cluster in Carina.
NGC6397|2300||One of the two closest globular clusters, with a collapsed core.
NGC6752|4000||Third-brightest globular cluster, with a core-collapsed centre.
NGC362|8600||Bright globular cluster near the Small Magellanic Cloud but belonging to the Milky Way.
NGC2808|9600||Massive globular cluster with three distinct generations of stars.
NGC1851|12000||Globular cluster in Columba.
NGC6822|500000|Barnard's Galaxy|Barred irregular dwarf galaxy of the Local Group, similar to the Small Magellanic Cloud.
NGC6946|7700000|Fireworks Galaxy|Face-on spiral with a record ten observed supernovae in a century.
NGC4038|22000000|Antennae Galaxies|Pair of colliding galaxies with long tidal tails, the nearest example of a major galaxy merger.
NGC4039|22000000|Antennae Galaxies|Southern member of the colliding Antennae pair.
NGC1300|18700000||Archetypal barred spiral galaxy with a grand-design inner spiral in its nucleus.
NGC1365|17900000|Great Barred Spiral|Giant barred spiral in the Fornax Cluster with an active nucleus.
NGC4631|9000000|Whale Galaxy|Edge-on starburst galaxy with a distorted, whale-like shape.
NGC5907|16000000|Splinter Galaxy|Extremely thin edge-on spiral surrounded by faint tidal streams.
NGC6744|9000000||Milky Way look-alike, a large barred spiral in Pavo.
NGC2403|3200000||Outlying member of the M81 group with giant HII regions.
NGC4449|3700000||Irregular starburst galaxy resembling the Large Magellanic Cloud.
NGC4244|4100000|Silver Needle|Edge-on spiral in Canes Venatici.
NGC3115|9700000|Spindle Galaxy|Lenticular galaxy with a two-billion-solar-mass black hole.
NGC1275|72000000|Perseus A|Central galaxy of the Perseus Cluster with an active nucleus and vast filaments of cool gas.
NGC4889|94000000||Supergiant elliptical in the Coma Cluster with one of the largest measured black holes, 21 billion solar masses.
NGC4874|100000000||Giant cD galaxy at the centre of the Coma Cluster.
NGC1316|19000000|Fornax A|Lenticular radio galaxy in the Fornax Cluster that recently merged with a spiral.
NGC1399|20000000||Central elliptical galaxy of the Fornax Cluster.
NGC3109|1300000||Magellanic-type spiral on the edge of the Local Group.
NGC147|760000||Dwarf spheroidal satellite of Andromeda.
NGC185|620000||Dwarf spheroidal satellite of Andromeda with a small active nucleus.
NGC2419|88500|Intergalactic Wanderer|Remote globular cluster in the far outer halo of the Milky Way.
NGC7331|14700000||Unbarred spiral galaxy once considered a twin of the Milky Way.
NGC7317|94000000|Stephan's Quintet|Member of the Stephan's Quintet compact galaxy group.
NGC7318|94000000|Stephan's Quintet|Colliding pair at the heart of Stephan's Quintet.
NGC7319|94000000|Stephan's Quintet|Barred spiral with a Seyfert nucleus in Stephan's Quintet.
NGC7320|12000000||Foreground galaxy that appears in the Stephan's Quintet field.
NGC1952|2000|Crab Nebula|Remnant of the supernova of 1054 with a central pulsar.
NGC6302|1040|Bug Nebula|Bipolar planetary nebula with one of the hottest central stars known, about 250,000 K.
NGC7027|920||Young, extremely bright planetary nebula in Cygnus.
NGC2818|3200||Planetary nebula that appears within an open cluster.
NGC6572|830|Emerald Nebula|Compact, bright green planetary nebula.
NGC3918|1500|Blue Planetary|Bright blue planetary nebula in Centaurus.
NGC40|1000|Bow-Tie Nebula|Planetary nebula with a Wolf-Rayet-type central star.
NGC1435|136|Merope Nebula|Reflection nebula around Merope in the Pleiades, dust the cluster is passing through.
NGC1977|420|Running Man Nebula|Reflection nebula just north of the Orion Nebula.
NGC2024|415|Flame Nebula|Emission nebula next to Alnitak in Orion's belt, hiding a young cluster behind dark dust.
NGC2023|415||Bright reflection nebula near the Horsehead.
NGC6357|1700|Lobster Nebula|Giant HII region containing the massive cluster Pismis 24.
NGC6334|1300|Cat's Paw Nebula|Emission nebula in Scorpius with several bright lobes.
NGC3603|7000||Most massive visible HII region in the Milky Way, with a compact starburst cluster.
NGC3576|2800|Statue of Liberty Nebula|Bright emission nebula in Carina.
NGC3324|2300|Gabriela Mistral Nebula|Emission nebula at the edge of the Carina complex, the 'Cosmic Cliffs' imaged by JWST.
NGC6729|130||Variable reflection nebula around R Coronae Australis in one of the nearest star-forming clouds.
NGC7023|430|Iris Nebula|Bright blue reflection nebula in Cepheus.
NGC1333|299||Reflection nebula and young cluster in the Perseus molecular cloud.
NGC2170|830|Angel Nebula|Reflection nebula in the Monoceros R2 complex.
NGC6726|130||Reflection nebula in the Corona Australis cloud.
NGC1893|3300||Young cluster inside the emission nebula IC 410.
NGC6604|1700||Young cluster in the Serpens star-forming complex near the Eagle Nebula.
NGC2362|1480|Tau Canis Majoris Cluster|Very young cluster of a few million years around a blue supergiant.
NGC6025|750||Open cluster in Triangulum Australe.
NGC2477|1300||Extremely rich open cluster in Puppis, sometimes mistaken for a globular.
NGC3766|1750|Pearl Cluster|Bright open cluster in Centaurus.
NGC4833|6500||Globular cluster in Musca.
NGC4372|5800||Globular cluster in Musca.
NGC5286|11100||Globular cluster possibly captured from the Gaia-Enceladus merger.
NGC6541|7500||Globular cluster in Corona Australis.
NGC6723|8700||Globular cluster in Sagittarius, near the Corona Australis clouds.
NGC288|8900||Loose globular cluster in Sculptor.
NGC3201|4900||Globular cluster with a strongly retrograde orbit, hosting stellar-mass black holes.
NGC5927|7700||Metal-rich globular cluster in Lupus.
NGC6388|9900||Massive globular cluster near the bulge.
NGC6441|11600||Massive metal-rich globular cluster with a planetary nebula.
NGC6553|6000||Bulge globular cluster in Sagittarius.
NGC6544|3000||Nearby, small globular cluster in Sagittarius.
NGC6352|5600||Globular cluster in Ara.
NGC6139|10100||Globular cluster in Scorpius.
NGC1261|16300||Globular cluster in Horologium.
NGC5024|17900||Globular cluster in Coma Berenices.
NGC5824|32100||Distant globular cluster in Lupus.
NGC6229|30500||Distant halo globular cluster in Hercules.
NGC7006|41200||Very remote halo globular cluster in Delphinus.
NGC5466|16000||Sparse globular cluster with long tidal tails.
NGC4147|19300||Globular cluster in Coma Berenices, possibly from the Sagittarius dwarf.
NGC2298|10800||Globular cluster in Puppis.
NGC1904|12600||Globular cluster in Lepus.
NGC1851|12000||Globular cluster in Columba.
NGC2266|3400||Open cluster in Gemini.
NGC188|1850||One of the oldest open clusters known, about 6.8 billion years old, near the north celestial pole.
NGC7789|2300|Caroline's Rose|Rich open cluster discovered by Caroline Herschel.
NGC457|2400|Owl Cluster|Open cluster whose two bright stars look like eyes; also called the ET Cluster.
NGC663|2100||Open cluster in Cassiopeia.
NGC752|440||Large, old open cluster in Andromeda.
NGC6633|380||Bright open cluster in Ophiuchus.
NGC6871|1700||Young cluster in the Cygnus OB3 association.
NGC6939|1200||Rich old open cluster in Cepheus.
NGC7243|800||Open cluster in Lacerta.
NGC1502|1000||Small cluster at the end of Kemble's Cascade.
NGC1647|550||Open cluster in Taurus.
NGC1817|1900||Open cluster in Taurus.
NGC2158|3400||Rich, old open cluster next to M35.
NGC2301|870||Open cluster in Monoceros.
NGC2353|1100||Open cluster in Monoceros.
NGC2354|1500||Open cluster in Canis Major.
NGC2360|1100|Caroline's Cluster|Open cluster in Canis Major discovered by Caroline Herschel.
NGC2506|3300||Old open cluster in Monoceros.
NGC2547|400||Young open cluster in Vela.
NGC2669|1000||Open cluster in Vela.
NGC3228|500||Small open cluster in Vela.
NGC3293|2300||Very young bright cluster near the Carina Nebula.
NGC3330|900||Open cluster in Vela.
NGC4103|1600||Open cluster in Crux.
NGC4349|2000||Open cluster in Crux.
NGC4609|1200||Open cluster in Crux seen through the Coalsack.
NGC5281|1100||Open cluster in Centaurus.
NGC5316|1200||Open cluster in Centaurus.
NGC5460|700||Open cluster in Centaurus.
NGC5617|1500||Open cluster in Centaurus.
NGC5662|660||Open cluster in Centaurus.
NGC5822|800||Large open cluster in Lupus.
NGC6067|1400||Rich open cluster in Norma.
NGC6087|900||Open cluster around the Cepheid S Normae.
NGC6124|500||Open cluster in Scorpius.
NGC6134|900||Open cluster in Norma.
NGC6167|1100||Open cluster in Norma.
NGC6193|1100||Young cluster lighting the Rim Nebula NGC 6188 in Ara.
NGC6188|1100|Rim Nebula|Emission nebula in Ara sculpted by young stars of NGC 6193.
NGC6208|940||Open cluster in Ara.
NGC6242|1100||Open cluster in Scorpius.
NGC6281|500||Open cluster in Scorpius.
NGC6383|1000||Cluster embedded in a HII region in Scorpius.
NGC6416|740||Open cluster in Scorpius.
NGC6425|800||Open cluster in Scorpius.
NGC6530|1250||Cluster inside the Lagoon Nebula.
NGC6520|1900||Compact open cluster next to the dark nebula Barnard 86.
NGC6645|1600||Open cluster in Sagittarius.
NGC6709|1100||Open cluster in Aquila.
NGC6716|800||Open cluster in Sagittarius.
NGC6755|1400||Open cluster in Aquila.
NGC6802|1100||Open cluster at the end of the Coathanger asterism.
NGC6811|1100||Open cluster in the Kepler field with known exoplanet hosts.
NGC6819|2400||Rich open cluster in the Kepler field.
NGC6823|1900||Young cluster in the Vulpecula OB1 association.
NGC6830|1600||Open cluster in Vulpecula.
NGC6866|1400||Open cluster in the Kepler field.
NGC6885|600||Open cluster in Vulpecula.
NGC6910|1100||Young cluster near Gamma Cygni.
NGC6940|770||Rich open cluster in Vulpecula.
NGC7062|1400||Open cluster in Cygnus.
NGC7063|700||Open cluster in Cygnus.
NGC7086|1300||Open cluster in Cygnus.
NGC7142|2000||Old open cluster in Cepheus.
NGC7160|800||Open cluster in Cepheus.
NGC7209|1100||Open cluster in Lacerta.
NGC7235|2800||Open cluster in Cepheus.
NGC7380|2200|Wizard Nebula|Cluster embedded in an emission nebula in Cepheus.
NGC7510|3000||Compact open cluster in Cepheus.
NGC7686|1000||Open cluster in Andromeda.
NGC7790|3000||Open cluster containing three Cepheid variables.
NGC7822|900||Emission nebula complex in Cepheus.
NGC129|1600||Open cluster with the Cepheid DL Cassiopeiae.
NGC133|600||Open cluster in Cassiopeia.
NGC225|650|Sailboat Cluster|Open cluster in Cassiopeia.
NGC281|2800|Pacman Nebula|Emission nebula in Cassiopeia with a dark lane resembling the game character's mouth.
NGC381|1100||Open cluster in Cassiopeia.
NGC436|3000||Open cluster in Cassiopeia.
NGC559|2400||Open cluster in Cassiopeia.
NGC637|2200||Open cluster in Cassiopeia.
NGC654|2400||Open cluster in Cassiopeia.
NGC659|2000||Open cluster in Cassiopeia.
NGC744|1200||Open cluster in Perseus.
NGC896|2300||Bright part of the Heart Nebula.
NGC957|1800||Open cluster in Perseus.
NGC1027|1000||Open cluster between the Heart and Soul nebulae.
NGC1245|3000||Rich open cluster in Perseus.
NGC1342|660||Open cluster in Perseus.
NGC1444|1200||Small open cluster in Perseus.
NGC1513|1300||Open cluster in Perseus.
NGC1528|1100||Open cluster in Perseus.
NGC1545|700||Open cluster in Perseus.
NGC1582|1100||Open cluster in Perseus.
NGC1662|430||Open cluster in Orion.
NGC1664|1200||Open cluster in Auriga.
NGC1746|420||Large open cluster in Taurus.
NGC1778|1500||Open cluster in Auriga.
NGC1857|1900||Open cluster in Auriga.
NGC1907|1800||Small cluster next to M38.
NGC1931|2300||Small emission nebula and cluster in Auriga.
NGC1980|400||Cluster around Iota Orionis at the tip of Orion's sword.
NGC1981|400||Open cluster north of the Orion Nebula.
NGC1999|450||Reflection nebula with a dark hole, near the Orion Nebula.
NGC2112|850||Open cluster in Orion.
NGC2129|2200||Open cluster in Gemini.
NGC2141|4000||Distant, rich open cluster in Orion.
NGC2169|1050|37 Cluster|Open cluster whose stars resemble the number 37.
NGC2175|1900||Cluster embedded in an emission nebula in Orion.
NGC2186|1500||Open cluster in Orion.
NGC2194|3500||Rich open cluster in Orion.
NGC2204|4000||Old open cluster in Canis Major.
NGC2215|1300||Open cluster in Monoceros.
NGC2232|320||Open cluster in Monoceros.
NGC2243|4400||Old open cluster in Canis Major.
NGC2251|1300||Open cluster in Monoceros.
NGC2252|1600||Open cluster near the Rosette Nebula.
NGC2261|770|Hubble's Variable Nebula|Fan-shaped reflection nebula that changes brightness as shadows move across it.
NGC2281|530||Open cluster in Auriga.
NGC2286|3000||Open cluster in Monoceros.
NGC2302|1200||Open cluster in Monoceros.
NGC2304|4000||Open cluster in Gemini.
NGC2324|3800||Rich open cluster in Monoceros.
NGC2335|1400||Open cluster in Monoceros.
NGC2343|1000||Open cluster in Monoceros.
NGC2345|2200||Open cluster in Canis Major.
NGC2355|1900||Open cluster in Gemini.
NGC2359|3700|Thor's Helmet|Bubble blown by a Wolf-Rayet star.
NGC2367|2200||Open cluster in Canis Major.
NGC2374|1500||Open cluster in Canis Major.
NGC2383|1700||Open cluster in Canis Major.
NGC2384|2100||Open cluster in Canis Major.
NGC2395|500||Open cluster in Gemini.
NGC2401|4300||Open cluster in Puppis.
NGC2409|1000||Open cluster in Puppis.
NGC2414|3800||Open cluster in Puppis.
NGC2420|3000||Old open cluster in Gemini.
NGC2421|2200||Open cluster in Puppis.
NGC2423|760||Open cluster in Puppis.
NGC2439|1300||Open cluster in Puppis.
NGC2453|1500||Open cluster in Puppis.
NGC2455|1800||Open cluster in Puppis.
NGC2467|1400|Skull and Crossbones Nebula|Emission nebula with young clusters in Puppis.
NGC2482|1300||Open cluster in Puppis.
NGC2483|1500||Open cluster in Puppis.
NGC2489|3900||Open cluster in Puppis.
NGC2509|900||Open cluster in Puppis.
NGC2527|600||Open cluster in Puppis.
NGC2533|1700||Open cluster in Puppis.
NGC2539|1300||Open cluster in Puppis.
NGC2567|1700||Open cluster in Puppis.
NGC2571|1300||Open cluster in Puppis.
NGC2588|4900||Open cluster in Puppis.
NGC2627|2000||Open cluster in Pyxis.
NGC2658|4000||Open cluster in Pyxis.
NGC2660|2800||Open cluster in Vela.
NGC2670|1200||Open cluster in Vela.
NGC2818A|3200||Open cluster around the planetary nebula NGC 2818.
NGC2910|2900||Open cluster in Vela.
NGC2925|770||Open cluster in Vela.
NGC3033|1400||Open cluster in Vela.
NGC3105|9500||Distant young open cluster in Vela.
NGC3247|2000||Cluster with emission nebula in Carina.
NGC3255|1900||Open cluster in Carina.
NGC3496|1000||Open cluster in Carina.
NGC3572|2000||Cluster in a HII region in Carina.
NGC3590|1900||Open cluster in Carina.
NGC3680|900||Open cluster in Centaurus.
NGC3960|2300||Open cluster in Centaurus.
NGC4052|1500||Open cluster in Crux.
NGC4337|2700||Open cluster in Crux.
NGC4439|1700||Open cluster in Crux.
NGC4463|1100||Open cluster in Musca.
NGC4815|2600||Open cluster in Musca.
NGC4852|1100||Open cluster in Centaurus.
NGC5138|1900||Open cluster in Centaurus.
NGC5168|1800||Open cluster in Centaurus.
NGC5269|1600||Open cluster in Centaurus.
NGC5288|2100||Open cluster in Centaurus.
NGC5606|1800||Open cluster in Centaurus.
NGC5715|1500||Open cluster in Circinus.
NGC5749|1100||Open cluster in Lupus.
NGC5764|1800||Open cluster in Lupus.
NGC5823|1200||Open cluster in Circinus.
NGC5925|1100||Open cluster in Norma.
NGC5999|2000||Open cluster in Norma.
NGC6005|2700||Open cluster in Norma.
NGC6031|1800||Open cluster in Norma.
NGC6152|1000||Open cluster in Norma.
NGC6178|1000||Open cluster in Scorpius.
NGC6192|1500||Open cluster in Scorpius.
NGC6200|2000||Open cluster in Ara.
NGC6204|1200||Open cluster in Ara.
NGC6249|1000||Open cluster in Scorpius.
NGC6250|900||Open cluster in Ara.
NGC6253|1500||Old, metal-rich open cluster in Ara.
NGC6259|1900||Open cluster in Scorpius.
NGC6268|1100||Open cluster in Scorpius.
NGC6318|2800||Open cluster in Scorpius.
NGC6322|1200||Open cluster in Scorpius.
NGC6396|1200||Open cluster in Scorpius.
NGC6404|2000||Open cluster in Scorpius.
NGC6451|2100||Open cluster in Scorpius.
NGC6469|1100||Open cluster in Sagittarius.
NGC6583|2100||Open cluster in Sagittarius.
NGC6596|1100||Open cluster in Sagittarius.
NGC6603|3600||Dense open cluster inside the Sagittarius Star Cloud.
NGC6631|2700||Open cluster in Serpens.
NGC6649|1400||Open cluster in Scutum.
NGC6664|1200||Open cluster in Scutum.
NGC6683|1200||Open cluster in Scutum.
NGC6704|2900||Open cluster in Scutum.
NGC6728|1100||Open cluster in Sagittarius.
NGC6738|500||Open cluster in Aquila.
NGC6756|1500||Open cluster in Aquila.
NGC6791|4000||Very old, metal-rich open cluster in the Kepler field.
NGC6793|600||Open cluster in Vulpecula.
NGC6800|1000||Open cluster in Vulpecula.
NGC6834|2100||Open cluster in Cygnus.
NGC6846|1800||Open cluster in Cygnus.
NGC6882|1200||Open cluster in Vulpecula.
NGC6883|1400||Open cluster in Cygnus.
NGC6950|1200||Open cluster in Delphinus.
NGC6991|700||Open cluster in Cygnus near the Veil.
NGC6997|800||Open cluster inside the North America Nebula.
NGC7024|1200||Open cluster in Cygnus.
NGC7031|1000||Open cluster in Cygnus.
NGC7039|900||Open cluster in Cygnus.
NGC7044|3300||Open cluster in Cygnus.
NGC7067|3600||Open cluster in Cygnus.
NGC7082|1500||Open cluster in Cygnus.
NGC7128|3000||Open cluster in Cygnus.
NGC7226|2600||Open cluster in Cepheus.
NGC7245|3500||Open cluster in Lacerta.
NGC7261|2500||Open cluster in Cepheus.
NGC7281|1000||Open cluster in Cepheus.
NGC7296|3000||Open cluster in Lacerta.
NGC7419|2900||Open cluster with five red supergiants in Cepheus.
NGC7423|3900||Open cluster in Cepheus.
NGC7429|1200||Open cluster in Cepheus.
NGC7438|1400||Open cluster in Cepheus.
NGC7762|800||Open cluster in Cepheus.
NGC7772|1500||Open cluster in Pegasus.
NGC7788|2400||Open cluster in Cassiopeia.
NGC7795|1200||Open cluster in Cassiopeia.
NGC103|3000||Open cluster in Cassiopeia.
NGC136|4000||Open cluster in Cassiopeia.
NGC146|3000||Open cluster in Cassiopeia.
NGC189|1000||Open cluster in Cassiopeia.
NGC366|2100||Open cluster in Cassiopeia.
NGC433|2000||Open cluster in Cassiopeia.
NGC609|3800||Open cluster in Cassiopeia.
NGC886|1700||Open cluster in Cassiopeia.
IC434|400|Horsehead Nebula region|Glowing hydrogen backdrop against which the dark Horsehead Nebula (Barnard 33) is silhouetted.
B33|400|Horsehead Nebula|Dark cloud of dust and gas shaped like a horse's head, silhouetted against the emission nebula IC 434.
IC1396|720|Elephant's Trunk Nebula|Large emission nebula in Cepheus with a dark trunk-shaped globule where stars are forming.
IC405|460|Flaming Star Nebula|Emission and reflection nebula lit by the runaway star AE Aurigae.
IC410|3300||Emission nebula around the cluster NGC 1893 with two 'tadpole' globules.
IC2944|2000|Running Chicken Nebula|HII region in Centaurus containing dark Thackeray's Globules.
IC2602|150|Southern Pleiades|Bright, nearby open cluster around Theta Carinae.
IC4665|350||Large, sparse open cluster in Ophiuchus.
IC5146|1000|Cocoon Nebula|Emission and reflection nebula at the end of a long dark nebula, Barnard 168.
IC1805|2300|Heart Nebula|Large heart-shaped emission nebula in Cassiopeia lit by the cluster Melotte 15.
IC1848|2300|Soul Nebula|Emission nebula neighbouring the Heart Nebula.
IC2118|270|Witch Head Nebula|Faint reflection nebula lit by Rigel, shaped like a witch's profile.
IC443|1500|Jellyfish Nebula|Supernova remnant in Gemini interacting with a molecular cloud.
IC1613|730000||Irregular dwarf galaxy of the Local Group, very low in dust.
IC10|750000||Starburst dwarf irregular galaxy in the Local Group, hidden behind the Milky Way's dust.
IC342|3300000||Large face-on spiral hidden behind the galactic plane; would be one of the brightest galaxies if not obscured.
IC2574|4000000|Coddington's Nebula|Dwarf irregular galaxy in the M81 group.
IC4406|600|Retina Nebula|Cylindrical planetary nebula seen from the side.
IC418|1300|Spirograph Nebula|Planetary nebula with an intricate patterned interior.
IC2149|1100||Small planetary nebula in Auriga.
IC4593|2200|White-Eyed Pea|Planetary nebula in Hercules.
IC5217|3400||Planetary nebula in Lacerta.
IC63|190|Ghost of Cassiopeia|Nebula being eroded by radiation from Gamma Cassiopeiae.
IC59|190||Nebula near Gamma Cassiopeiae.
IC1795|2300|Fish Head Nebula|Part of the Heart Nebula complex.
IC1318|1500|Sadr Region|Emission nebula around Gamma Cygni.
IC1311|1800||Open cluster in Cygnus.
IC4756|480||Large open cluster in Serpens.
IC2391|150|Omicron Velorum Cluster|Bright nearby open cluster about 50 million years old.
IC2395|800||Open cluster in Vela.
IC2488|1300||Open cluster in Vela.
IC2581|2400||Open cluster in Carina.
IC2714|1300||Open cluster in Carina.
IC4651|900||Old open cluster in Ara.
IC2157|2000||Open cluster in Gemini.
IC1369|2600||Open cluster in Cygnus.
IC1590|2800||Cluster at the centre of the Pacman Nebula.
IC2177|1100|Seagull Nebula|Large emission nebula on the border of Monoceros and Canis Major.
IC1274|1700||Emission nebula near the Lagoon.
IC4628|1600|Prawn Nebula|Emission nebula in Scorpius.
IC4603|130||Reflection nebula in the Rho Ophiuchi cloud complex.
IC4604|130|Rho Ophiuchi Nebula|Colourful reflection nebula in one of the nearest star-forming regions.
IC4605|130||Reflection nebula near Rho Ophiuchi.
IC4592|130|Blue Horsehead Nebula|Faint blue reflection nebula around Nu Scorpii.
IC2087|140||Reflection nebula in the Taurus molecular cloud.
IC348|315||Young cluster in the Perseus molecular cloud.
IC5076|1700||Reflection nebula in Cygnus.
IC5067|600|Pelican Nebula|Part of the Pelican Nebula.
IC5068|600||Emission nebula south of the Pelican Nebula.
IC1275|1700||Emission nebula in Sagittarius.
IC1283|1900||Emission nebula in Sagittarius.
IC4685|1700||Emission nebula in Sagittarius near M8.
IC2220|1200|Toby Jug Nebula|Reflection nebula around a red giant in Carina.
IC2872|2000||Emission nebula in Centaurus.
IC2948|2000|Running Chicken Nebula|Emission nebula around the cluster IC 2944.
IC1442|3100||Open cluster in Lacerta.
IC1434|3000||Open cluster in Lacerta.
IC4996|2000||Young open cluster in Cygnus.
IC5146|1000|Cocoon Nebula|Emission nebula at the end of a dark lane.
IC1747|3600||Planetary nebula in Cassiopeia.
IC2003|4600||Planetary nebula in Perseus.
IC289|1800||Planetary nebula in Cassiopeia.
IC3568|2800|Lemon Slice Nebula|Nearly spherical planetary nebula.
IC4634|2300||Planetary nebula in Ophiuchus.
IC4637|1300||Planetary nebula in Scorpius.
IC4642|4700||Planetary nebula in Ara.
IC4776|4000||Planetary nebula in Sagittarius.
IC4846|6800||Planetary nebula in Aquila.
IC4997|2400||Young compact planetary nebula in Sagitta.
IC5117|3000||Planetary nebula in Cygnus.
IC5148|1000|Spare Tyre Nebula|Ring-like planetary nebula in Grus.
IC351|4000||Planetary nebula in Perseus.
IC2501|3000||Planetary nebula in Carina.
IC2553|3000||Planetary nebula in Carina.
IC2621|3400||Planetary nebula in Carina.
IC2165|2900||Planetary nebula in Canis Major.
IC1297|3300||Planetary nebula in Corona Australis.
IC2448|3000||Planetary nebula in Carina.
IC972|2300||Planetary nebula in Virgo.
IC1454|3100||Planetary nebula in Cepheus.
IC4732|4200||Planetary nebula in Sagittarius.
IC1295|1000||Faint planetary nebula in Scutum.
IC1266|1500||Planetary nebula in Scorpius.
IC5332|9000000||Face-on spiral galaxy in Sculptor.
IC1459|29000000||Elliptical galaxy with a counter-rotating core in Grus.
IC5052|6000000||Edge-on spiral in Pavo.
IC5201|11000000||Barred spiral in Grus.
IC4710|9000000||Dwarf irregular galaxy in Pavo.
IC5152|1900000||Dwarf irregular galaxy on the edge of the Local Group.
IC3583|9000000||Irregular galaxy in the Virgo Cluster interacting with NGC 4569.
IC4182|4300000||Dwarf irregular galaxy famous for the supernova SN 1937C.
IC2233|10000000||Superthin edge-on galaxy in Lynx.
IC239|12000000||Face-on spiral galaxy in Andromeda.
IC356|14000000||Spiral galaxy in Camelopardalis.
IC1727|8000000||Irregular galaxy paired with NGC 672.
IC3568|2800|Lemon Slice Nebula|Planetary nebula.
`;

// Objects not in OpenNGC: {n, aka, t, ra, dec (deg), d (pc), maj, min (arcmin), pa, desc}
export const EXTRA_DSO = [
  { n: 'Large Magellanic Cloud', aka: 'LMC, ESO 56-115', t: 'G', ra: 80.894, dec: -69.756, d: 49970, maj: 645, min: 550, pa: 170, hubble: 'SB(s)m', desc: 'The largest satellite galaxy of the Milky Way, an irregular barred spiral with about 30 billion stars, 14,000 light-years across. Home of the Tarantula Nebula and Supernova 1987A.' },
  { n: 'Small Magellanic Cloud', aka: 'SMC, NGC 292', t: 'G', ra: 13.187, dec: -72.829, d: 62440, maj: 320, min: 185, pa: 45, hubble: 'SB(s)m pec', desc: 'Dwarf irregular satellite galaxy of the Milky Way with a few hundred million stars, connected to the LMC by a bridge of gas.' },
  { n: 'Sagittarius Dwarf Spheroidal', aka: 'Sgr dSph', t: 'G', ra: 283.764, dec: -30.480, d: 26000, maj: 450, min: 216, pa: 0, hubble: 'dSph', desc: 'Dwarf galaxy being torn apart as it orbits through the Milky Way disk, leaving the Sagittarius Stream of stars around the sky.' },
  { n: 'Fornax Dwarf', aka: 'Fornax dSph', t: 'G', ra: 39.997, dec: -34.449, d: 147000, maj: 17, min: 12, pa: 41, hubble: 'dSph', desc: 'Dwarf spheroidal satellite of the Milky Way with six globular clusters of its own.' },
  { n: 'Sculptor Dwarf', aka: 'Sculptor dSph', t: 'G', ra: 15.039, dec: -33.709, d: 86000, maj: 40, min: 31, pa: 99, hubble: 'dSph', desc: 'The first dwarf spheroidal galaxy discovered (1937), a faint satellite of the Milky Way.' },
  { n: 'Draco Dwarf', aka: 'Draco dSph', t: 'G', ra: 260.052, dec: 57.915, d: 76000, maj: 36, min: 25, pa: 89, hubble: 'dSph', desc: 'Faint dwarf spheroidal galaxy that is one of the most dark-matter-dominated objects known.' },
  { n: 'Ursa Minor Dwarf', aka: 'UMi dSph', t: 'G', ra: 227.286, dec: 67.222, d: 76000, maj: 30, min: 19, pa: 53, hubble: 'dSph', desc: 'Ancient dwarf spheroidal satellite of the Milky Way with a single burst of star formation 13 billion years ago.' },
  { n: 'Carina Dwarf', aka: 'Carina dSph', t: 'G', ra: 100.403, dec: -50.966, d: 105000, maj: 24, min: 16, pa: 65, hubble: 'dSph', desc: 'Dwarf spheroidal satellite with several distinct episodes of star formation.' },
  { n: 'Sextans Dwarf', aka: 'Sextans dSph', t: 'G', ra: 153.262, dec: -1.615, d: 86000, maj: 60, min: 40, pa: 56, hubble: 'dSph', desc: 'Very diffuse dwarf spheroidal satellite of the Milky Way.' },
  { n: 'Leo I', aka: 'Regulus Dwarf, UGC 5470', t: 'G', ra: 152.117, dec: 12.306, d: 254000, maj: 12, min: 9, pa: 79, hubble: 'dSph', desc: 'Distant dwarf spheroidal satellite of the Milky Way, hard to observe next to the bright star Regulus.' },
  { n: 'Leo II', aka: 'Leo B, UGC 6253', t: 'G', ra: 168.370, dec: 22.152, d: 233000, maj: 12, min: 11, pa: 12, hubble: 'dSph', desc: 'Dwarf spheroidal galaxy in the outer halo of the Milky Way.' },
  { n: 'Boötes I', aka: 'Boo I', t: 'G', ra: 210.025, dec: 14.500, d: 66000, maj: 25, min: 17, pa: 14, hubble: 'dSph', desc: 'Ultra-faint dwarf galaxy discovered in 2006 in Sloan survey data.' },
  { n: 'Canes Venatici I', aka: 'CVn I', t: 'G', ra: 202.015, dec: 33.556, d: 218000, maj: 18, min: 9, pa: 73, hubble: 'dSph', desc: 'Faint dwarf spheroidal satellite of the Milky Way.' },
  { n: 'Coma Berenices Dwarf', aka: 'Com', t: 'G', ra: 186.746, dec: 23.904, d: 44000, maj: 12, min: 8, pa: -65, hubble: 'dSph', desc: 'Ultra-faint dwarf galaxy, one of the closest satellites of the Milky Way.' },
  { n: 'Hercules Dwarf', aka: 'Her', t: 'G', ra: 247.758, dec: 12.792, d: 132000, maj: 17, min: 6, pa: -78, hubble: 'dSph', desc: 'Highly elongated ultra-faint dwarf galaxy, possibly being tidally disrupted.' },
  { n: 'Ursa Major II', aka: 'UMa II', t: 'G', ra: 132.875, dec: 63.130, d: 32000, maj: 32, min: 16, pa: -77, hubble: 'dSph', desc: 'One of the nearest ultra-faint dwarf galaxies.' },
  { n: 'Segue 1', aka: '', t: 'G', ra: 151.767, dec: 16.082, d: 23000, maj: 9, min: 6, pa: 0, hubble: 'dSph', desc: 'Among the faintest galaxies known, with a luminosity of only a few hundred Suns.' },
  { n: 'Andromeda I', aka: 'And I', t: 'G', ra: 11.416, dec: 38.037, d: 745000, maj: 4, min: 3, pa: 22, hubble: 'dSph', desc: 'Dwarf spheroidal satellite of the Andromeda Galaxy.' },
  { n: 'Andromeda II', aka: 'And II', t: 'G', ra: 19.124, dec: 33.419, d: 652000, maj: 8, min: 6, pa: 34, hubble: 'dSph', desc: 'Dwarf spheroidal satellite of Andromeda with a stellar stream from a past merger.' },
  { n: 'Andromeda III', aka: 'And III', t: 'G', ra: 8.879, dec: 36.499, d: 749000, maj: 5, min: 3, pa: 136, hubble: 'dSph', desc: 'Dwarf spheroidal satellite of Andromeda.' },
  { n: 'Wolf-Lundmark-Melotte', aka: 'WLM, UGCA 444', t: 'G', ra: 0.492, dec: -15.461, d: 933000, maj: 12, min: 4, pa: 4, hubble: 'IB(s)m', desc: 'Isolated dwarf irregular galaxy on the far edge of the Local Group.' },
  { n: 'Pegasus Dwarf Irregular', aka: 'Peg DIG, UGC 12613', t: 'G', ra: 352.151, dec: 14.747, d: 920000, maj: 5, min: 3, pa: 122, hubble: 'dIrr/dSph', desc: 'Transition-type dwarf galaxy in the Local Group.' },
  { n: 'Aquarius Dwarf', aka: 'DDO 210', t: 'G', ra: 311.716, dec: -12.848, d: 1070000, maj: 2, min: 1, pa: 90, hubble: 'dIrr', desc: 'Isolated dwarf irregular galaxy of the Local Group.' },
  { n: 'Leo A', aka: 'Leo III, DDO 69', t: 'G', ra: 149.860, dec: 30.746, d: 800000, maj: 5, min: 3, pa: 114, hubble: 'dIrr', desc: 'Gas-rich dwarf irregular that formed most of its stars late in cosmic history.' },
  { n: 'Tucana Dwarf', aka: 'Tuc dSph', t: 'G', ra: 340.457, dec: -64.419, d: 880000, maj: 3, min: 1.5, pa: 97, hubble: 'dSph', desc: 'Isolated dwarf spheroidal on the far side of the Local Group.' },
  { n: 'Cetus Dwarf', aka: 'Cet dSph', t: 'G', ra: 6.546, dec: -11.044, d: 755000, maj: 5, min: 4, pa: 63, hubble: 'dSph', desc: 'Isolated dwarf spheroidal galaxy in the Local Group.' },
  { n: 'Phoenix Dwarf', aka: 'Phe', t: 'G', ra: 27.776, dec: -44.445, d: 415000, maj: 5, min: 4, pa: 5, hubble: 'dIrr/dSph', desc: 'Small transition dwarf between spheroidal and irregular types.' },
  { n: 'Antlia Dwarf', aka: 'Ant', t: 'G', ra: 150.005, dec: -27.333, d: 1320000, maj: 2, min: 1.5, pa: 0, hubble: 'dSph/dIrr', desc: 'Dwarf galaxy at the edge of the Local Group, companion of NGC 3109.' },
  { n: 'Sextans A', aka: 'UGCA 205, DDO 75', t: 'G', ra: 152.753, dec: -4.693, d: 1320000, maj: 6, min: 5, pa: 0, hubble: 'IBm', desc: 'Square-shaped dwarf irregular galaxy on the edge of the Local Group.' },
  { n: 'Sextans B', aka: 'UGC 5373', t: 'G', ra: 150.000, dec: 5.332, d: 1360000, maj: 5, min: 4, pa: 110, hubble: 'IBm', desc: 'Dwarf irregular galaxy on the outskirts of the Local Group.' },
  { n: 'Sagittarius Dwarf Irregular', aka: 'SagDIG', t: 'G', ra: 292.496, dec: -17.678, d: 1060000, maj: 3, min: 2, pa: 90, hubble: 'IB(s)m', desc: 'Remote dwarf irregular of the Local Group.' },
  { n: 'Leo P', aka: '', t: 'G', ra: 155.438, dec: 18.088, d: 1620000, maj: 1, min: 0.7, pa: 0, hubble: 'dIrr', desc: 'Extremely metal-poor gas-rich dwarf discovered in 2013.' },
  { n: 'Pisces Dwarf', aka: 'LGS 3', t: 'G', ra: 15.975, dec: 21.888, d: 769000, maj: 2, min: 1.6, pa: 0, hubble: 'dIrr/dSph', desc: 'Transition dwarf galaxy, satellite of Triangulum or Andromeda.' },
  { n: 'Sagittarius A*', aka: 'Sgr A*, Galactic Centre', t: 'BH', ra: 266.41683, dec: -29.00781, d: 8178, maj: 0.001, min: 0.001, pa: 0, desc: 'The supermassive black hole at the centre of the Milky Way, 4.3 million solar masses. Imaged by the Event Horizon Telescope in 2022. Stars orbit it at up to 8% of the speed of light.' },
  { n: 'Coalsack Nebula', aka: 'C99', t: 'DrkN', ra: 186.5, dec: -63.0, d: 180, maj: 420, min: 300, pa: 0, desc: 'The most prominent dark nebula in the sky, a cloud of dust blotting out the Milky Way next to the Southern Cross.' },
  { n: "Barnard's Loop", aka: 'Sh 2-276', t: 'EmN', ra: 86.0, dec: -2.0, d: 440, maj: 600, min: 400, pa: 0, desc: 'Vast arc of glowing hydrogen around the Orion Nebula, a shell blown by supernovae and stellar winds in the Orion OB1 association.' },
  { n: 'Gum Nebula', aka: 'Gum 12', t: 'EmN', ra: 121.5, dec: -42.0, d: 450, maj: 2160, min: 2160, pa: 0, desc: 'Enormous faint emission nebula covering 36 degrees of sky, probably an ancient supernova remnant.' },
  { n: 'Vela Supernova Remnant', aka: 'Vela SNR', t: 'SNR', ra: 128.5, dec: -45.8, d: 290, maj: 480, min: 480, pa: 0, desc: 'Remnant of a supernova about 11,000 years ago, containing the Vela Pulsar, one of the brightest pulsars in the sky.' },
  { n: 'Cassiopeia A', aka: 'Cas A, 3C 461', t: 'SNR', ra: 350.850, dec: 58.815, d: 3400, maj: 5, min: 5, pa: 0, desc: 'The brightest radio source in the sky outside the Solar System. Remnant of a supernova around 1680 with a neutron star at its centre.' },
  { n: "Tycho's Supernova Remnant", aka: 'SN 1572, 3C 10', t: 'SNR', ra: 6.340, dec: 64.130, d: 2500, maj: 8, min: 8, pa: 0, desc: 'Remnant of the Type Ia supernova observed by Tycho Brahe in 1572.' },
  { n: "Kepler's Supernova Remnant", aka: 'SN 1604', t: 'SNR', ra: 262.671, dec: -21.492, d: 5000, maj: 4, min: 4, pa: 0, desc: 'Remnant of the last supernova seen in the Milky Way, observed by Johannes Kepler in 1604.' },
  { n: 'Cygnus Loop', aka: 'Veil Nebula complex', t: 'SNR', ra: 312.75, dec: 30.67, d: 735, maj: 180, min: 180, pa: 0, desc: 'Large supernova remnant containing the Veil Nebula, about 8,000 years old and 120 light-years across.' },
  { n: 'Westerlund 1', aka: 'Wd 1', t: 'OCl', ra: 251.767, dec: -45.851, d: 3900, maj: 2, min: 2, pa: 0, desc: 'The most massive young star cluster in the Galaxy, a super star cluster full of Wolf-Rayet stars, hypergiants and a magnetar.' },
  { n: 'Westerlund 2', aka: 'Wd 2', t: 'OCl', ra: 155.992, dec: -57.763, d: 4200, maj: 2, min: 2, pa: 0, desc: 'Compact young cluster inside the HII region RCW 49, containing some of the hottest stars known.' },
  { n: 'Arches Cluster', aka: '', t: 'OCl', ra: 266.460, dec: -28.824, d: 8200, maj: 0.4, min: 0.4, pa: 0, desc: 'Densest known star cluster in the Milky Way, near the galactic centre.' },
  { n: 'Quintuplet Cluster', aka: '', t: 'OCl', ra: 266.559, dec: -28.830, d: 8200, maj: 0.5, min: 0.5, pa: 0, desc: 'Massive young cluster near the galactic centre containing the Pistol Star.' },
  { n: 'Cygnus X-1', aka: 'HDE 226868', t: '*', ra: 299.590, dec: 35.202, d: 2200, maj: 0.001, min: 0.001, pa: 0, desc: 'The first confirmed black hole, 21 solar masses, feeding from a blue supergiant companion. Subject of a famous bet between Hawking and Thorne.' },
  { n: 'Pipe Nebula', aka: 'LDN 1773', t: 'DrkN', ra: 260.0, dec: -25.5, d: 145, maj: 420, min: 60, pa: 0, desc: 'Dark nebula in Ophiuchus shaped like a smoking pipe.' },
  { n: 'Barnard 68', aka: 'B68, LDN 57', t: 'DrkN', ra: 261.6, dec: -23.83, d: 125, maj: 4, min: 4, pa: 0, desc: 'Isolated dark cloud so dense it blocks all visible light from stars behind it; it will collapse to form a star.' },
  { n: 'Cave Nebula', aka: 'Sh 2-155, C9', t: 'HII', ra: 344.5, dec: 62.52, d: 730, maj: 50, min: 30, pa: 0, desc: 'Diffuse nebula in Cepheus with a dark cave-like bay.' },
  { n: 'Tulip Nebula', aka: 'Sh 2-101', t: 'HII', ra: 299.95, dec: 35.32, d: 1800, maj: 16, min: 9, pa: 0, desc: 'Emission nebula in Cygnus near the black hole Cygnus X-1.' },
  { n: 'Pillars of Creation', aka: 'Eagle Nebula pillars, M16 pillars', t: 'HII', ra: 274.7163, dec: -13.8222, d: 1740, maj: 3.5, min: 3.2, pa: 0, desc: 'The famous columns of cold gas and dust inside the Eagle Nebula, photographed by Hubble in 1995 and again by JWST. The tallest pillar is about 4 light-years long; new stars are forming in their tips.' },
  { n: 'Hyades', aka: 'Melotte 25, C41', t: 'OCl', ra: 66.75, dec: 15.87, d: 47, maj: 330, min: 330, pa: 0, desc: 'The nearest open cluster to the Sun, about 625 million years old, forming the V-shaped face of Taurus. Aldebaran lies in front of it, not in it.' },
  { n: 'Pleiades', aka: 'M45, Seven Sisters, Melotte 22', t: 'OCl', ra: 56.75, dec: 24.117, d: 136, maj: 110, min: 110, pa: 0, desc: 'The most famous open cluster: about 1,000 hot blue stars 100 million years old, wrapped in a reflection nebula of dust they are passing through.' },
  { n: 'Alpha Persei Cluster', aka: 'Melotte 20, Collinder 39', t: 'OCl', ra: 51.6, dec: 48.9, d: 172, maj: 185, min: 185, pa: 0, desc: 'Bright, young open cluster around Mirfak, about 50 million years old.' },
  { n: 'Coma Star Cluster', aka: 'Melotte 111', t: 'OCl', ra: 186.0, dec: 25.85, d: 86, maj: 275, min: 275, pa: 0, desc: 'Sparse nearby open cluster of about 40 stars in Coma Berenices.' },
  { n: 'Ursa Major Moving Group', aka: 'Collinder 285', t: '*Ass', ra: 180.0, dec: 56.0, d: 24, maj: 900, min: 900, pa: 0, desc: 'Stellar association that includes most of the Big Dipper stars, moving together through space.' },
  { n: 'Scorpius-Centaurus Association', aka: 'Sco OB2', t: '*Ass', ra: 240.0, dec: -30.0, d: 130, maj: 3000, min: 1500, pa: 0, desc: 'The nearest OB association, a vast group of young hot stars spanning Scorpius, Lupus, Centaurus and Crux.' },
  { n: 'Orion OB1 Association', aka: 'Ori OB1', t: '*Ass', ra: 84.0, dec: -2.0, d: 400, maj: 900, min: 600, pa: 0, desc: 'The stellar association containing Orion\'s Belt and Sword and the Orion Nebula.' },
  { n: 'Virgo Cluster', aka: 'Virgo I', t: 'GGroup', ra: 187.70, dec: 12.39, d: 16500000, maj: 480, min: 480, pa: 0, desc: 'The nearest large galaxy cluster, with 1,300 to 2,000 galaxies, dominated by M87. The Local Group is falling toward it.' },
  { n: 'Fornax Cluster', aka: 'Abell S0373', t: 'GGroup', ra: 54.62, dec: -35.45, d: 19300000, maj: 180, min: 180, pa: 0, desc: 'Second-richest galaxy cluster within 100 million light-years, centred on NGC 1399.' },
  { n: 'Coma Cluster', aka: 'Abell 1656', t: 'GGroup', ra: 194.95, dec: 27.98, d: 100000000, maj: 120, min: 120, pa: 0, desc: 'Rich galaxy cluster of over 1,000 galaxies. Fritz Zwicky first inferred dark matter here in 1933.' },
  { n: 'Perseus Cluster', aka: 'Abell 426', t: 'GGroup', ra: 49.95, dec: 41.51, d: 73600000, maj: 150, min: 150, pa: 0, desc: 'One of the most massive objects in the nearby universe, the brightest galaxy cluster in X-rays, centred on NGC 1275.' },
  { n: 'Norma Cluster', aka: 'Abell 3627, Great Attractor', t: 'GGroup', ra: 243.90, dec: -60.90, d: 68000000, maj: 100, min: 100, pa: 0, desc: 'Massive cluster near the centre of the Great Attractor, the gravitational anomaly pulling the Local Group and thousands of galaxies.' },
  { n: 'Centaurus Cluster', aka: 'Abell 3526', t: 'GGroup', ra: 192.20, dec: -41.31, d: 52000000, maj: 90, min: 90, pa: 0, desc: 'Galaxy cluster centred on NGC 4696, part of the Hydra-Centaurus Supercluster.' },
  { n: 'Hydra Cluster', aka: 'Abell 1060', t: 'GGroup', ra: 159.18, dec: -27.52, d: 58000000, maj: 80, min: 80, pa: 0, desc: 'Galaxy cluster of about 160 bright galaxies in Hydra.' },
  { n: 'Shapley Supercluster', aka: 'SCl 124', t: 'GGroup', ra: 202.0, dec: -31.5, d: 200000000, maj: 300, min: 300, pa: 0, desc: 'The largest concentration of galaxies in the nearby universe, containing over 8,000 galaxies.' },
  { n: '3C 273', aka: 'Quasar 3C 273', t: 'QSO', ra: 187.278, dec: 2.052, d: 749000000, maj: 0.1, min: 0.1, pa: 0, desc: 'The first quasar identified (1963) and the optically brightest. A supermassive black hole 2.4 billion light-years away, 4 trillion times as luminous as the Sun.' },
  { n: 'Local Void', aka: '', t: 'Other', ra: 270.0, dec: 5.0, d: 23000000, maj: 3000, min: 3000, pa: 0, desc: 'A vast empty region at least 150 million light-years across bordering the Local Group.' },
];

// Descriptions for well-known stars, keyed by HYG proper name.
export const STAR_NOTES = {
  'Sirius': 'The brightest star in the night sky, 25 times as luminous as the Sun. Its faint white-dwarf companion Sirius B was the first white dwarf discovered.',
  'Canopus': 'Second-brightest star, a bright giant 10,000 times as luminous as the Sun and a common navigation reference for spacecraft.',
  'Rigil Kentaurus': 'Alpha Centauri A, the Sun-like primary of the nearest star system. Together with Alpha Centauri B and Proxima it is 4.37 light-years away.',
  'Toliman': 'Alpha Centauri B, an orange dwarf orbiting Alpha Centauri A every 79.9 years.',
  'Proxima Centauri': 'The nearest star to the Sun at 4.24 light-years, a faint red dwarf hosting at least two planets, including Proxima b in the habitable zone.',
  'Arcturus': 'Brightest star in the northern celestial hemisphere, an orange giant 25 times the Sun\'s diameter, racing through the galactic disk on an unusual orbit.',
  'Vega': 'Once the pole star and the first star photographed. Rapidly rotating, surrounded by a debris disk; it was the calibration zero-point for the magnitude scale.',
  'Capella': 'Two yellow giant stars orbiting each other every 104 days, accompanied by a distant pair of red dwarfs.',
  'Rigel': 'Blue supergiant, one of the most luminous stars in the local Galaxy at around 120,000 solar luminosities.',
  'Procyon': 'Nearby bright star with a white dwarf companion, 11.5 light-years away.',
  'Achernar': 'Flattened by its extreme rotation into an oblate shape, its equator is 56% wider than its poles.',
  'Betelgeuse': 'Red supergiant about 760 times the Sun\'s diameter. It dimmed dramatically in 2019-2020 and will explode as a supernova within the next 100,000 years.',
  'Hadar': 'Beta Centauri, a triple system of hot blue giants.',
  'Altair': 'Nearby A-type star spinning so fast (once every 9 hours) that it is visibly oblate.',
  'Acrux': 'Brightest star in the Southern Cross, a multiple system of hot blue stars.',
  'Aldebaran': 'Orange giant that marks the eye of the Bull; it hosts a probable giant planet and lies in front of the Hyades cluster.',
  'Antares': 'Red supergiant with a diameter about 680 times the Sun\'s; it would engulf the orbit of Mars.',
  'Spica': 'Close binary of two hot B-type stars orbiting every four days.',
  'Pollux': 'Nearest giant star to the Sun with a confirmed planet, Pollux b.',
  'Fomalhaut': 'Young star surrounded by a huge debris ring imaged by Hubble and JWST.',
  'Deneb': 'One of the most luminous stars visible to the naked eye, a blue-white supergiant roughly 200,000 times as luminous as the Sun.',
  'Mimosa': 'Beta Crucis, a hot blue giant and Beta Cephei variable in the Southern Cross.',
  'Regulus': 'Rapid rotator flattened at the poles, orbited by a white dwarf.',
  'Adhara': 'Bright blue giant, the strongest source of extreme ultraviolet in the night sky.',
  'Castor': 'Six stars in one system: three pairs of binaries.',
  'Gacrux': 'Nearest red giant to the Sun, at the top of the Southern Cross.',
  'Shaula': 'Lambda Scorpii, a triple system of B-type stars at the tip of the scorpion\'s sting.',
  'Bellatrix': 'Hot blue giant on Orion\'s shoulder.',
  'Elnath': 'Beta Tauri, a blue giant at the tip of the Bull\'s horn.',
  'Miaplacidus': 'Beta Carinae, a bright A-type star.',
  'Alnilam': 'Middle star of Orion\'s Belt, a blue supergiant 275,000 times as luminous as the Sun.',
  'Alnitak': 'Eastern star of Orion\'s Belt, a hot O-type triple system lighting the Flame Nebula.',
  'Mintaka': 'Western star of Orion\'s Belt, an eclipsing binary system.',
  'Alnair': 'Alpha Gruis, a blue main-sequence star.',
  'Alioth': 'Brightest star of the Big Dipper, a peculiar magnetic A-type star.',
  'Dubhe': 'Orange giant at the front of the Big Dipper\'s bowl, a pointer to Polaris.',
  'Mirfak': 'Yellow-white supergiant at the heart of the Alpha Persei cluster.',
  'Wezen': 'Yellow supergiant in Canis Major, 50,000 times as luminous as the Sun.',
  'Sargas': 'Theta Scorpii, a bright yellow-white giant.',
  'Kaus Australis': 'Brightest star in Sagittarius, a blue giant.',
  'Avior': 'Epsilon Carinae, a binary of an orange giant and a hot B-type star.',
  'Alkaid': 'Hot blue star at the end of the Big Dipper\'s handle.',
  'Menkalinan': 'Beta Aurigae, an eclipsing binary of two A-type subgiants.',
  'Atria': 'Alpha Trianguli Australis, an orange bright giant.',
  'Alhena': 'Gamma Geminorum, a bright A-type subgiant.',
  'Peacock': 'Alpha Pavonis, a blue subgiant.',
  'Alsephina': 'Delta Velorum, an eclipsing binary system.',
  'Mirzam': 'Beta Canis Majoris, a pulsating Beta Cephei variable.',
  'Alphard': 'Solitary orange giant, the heart of Hydra.',
  'Polaris': 'The North Star, a Cepheid variable supergiant almost exactly above Earth\'s north pole, 430 light-years away.',
  'Hamal': 'Alpha Arietis, an orange giant with a planet.',
  'Algieba': 'Gamma Leonis, a beautiful double star of two giants.',
  'Diphda': 'Beta Ceti, an orange giant with a hot corona.',
  'Mizar': 'The first double star discovered by telescope; each component is itself a binary.',
  'Nunki': 'Sigma Sagittarii, a hot B-type star.',
  'Menkent': 'Theta Centauri, an orange giant.',
  'Mirach': 'Beta Andromedae, a red giant used to find the Andromeda Galaxy.',
  'Alpheratz': 'Alpha Andromedae, a mercury-manganese star shared with the Square of Pegasus.',
  'Rasalhague': 'Alpha Ophiuchi, a rapidly rotating A-type star.',
  'Kochab': 'Beta Ursae Minoris, an orange giant that was the pole star around 1000 BC.',
  'Saiph': 'Kappa Orionis, a blue supergiant at Orion\'s knee.',
  'Denebola': 'Beta Leonis, a young A-type star with a debris disk.',
  'Algol': 'The Demon Star, the prototype eclipsing binary, dimming every 2.87 days.',
  'Tiaki': 'Beta Gruis, a red giant variable.',
  'Muhlifain': 'Gamma Centauri, a binary of two A-type stars.',
  'Aspidiske': 'Iota Carinae, a white supergiant.',
  'Suhail': 'Lambda Velorum, an orange supergiant.',
  'Alphecca': 'Alpha Coronae Borealis, an eclipsing binary in the Northern Crown.',
  'Mintaka': 'Delta Orionis, westernmost star of Orion\'s Belt.',
  'Sadr': 'Gamma Cygni, a yellow supergiant at the heart of the Northern Cross surrounded by emission nebulosity.',
  'Eltanin': 'Gamma Draconis, an orange giant; its aberration measurements by Bradley proved Earth\'s motion.',
  'Schedar': 'Alpha Cassiopeiae, an orange giant.',
  'Naos': 'Zeta Puppis, one of the hottest naked-eye stars at about 40,000 K, a runaway O-type supergiant.',
  'Almach': 'Gamma Andromedae, a striking gold-and-blue double star.',
  'Caph': 'Beta Cassiopeiae, a Delta Scuti variable.',
  'Izar': 'Epsilon Boötis, a fine orange-and-blue double.',
  'Dschubba': 'Delta Scorpii, a variable B-type star that brightened unexpectedly in 2000.',
  'Larawag': 'Epsilon Scorpii, an orange giant.',
  'Merak': 'Beta Ursae Majoris, a pointer star of the Big Dipper with a debris disk.',
  'Ankaa': 'Alpha Phoenicis, an orange giant.',
  'Girtab': 'Kappa Scorpii, a pulsating blue variable.',
  'Enif': 'Epsilon Pegasi, an orange supergiant known for sudden flares.',
  'Scheat': 'Beta Pegasi, a red giant variable.',
  'Sabik': 'Eta Ophiuchi, a binary of two A-type stars.',
  'Phecda': 'Gamma Ursae Majoris, an A-type star in the Big Dipper\'s bowl.',
  'Aludra': 'Eta Canis Majoris, a blue supergiant.',
  'Markeb': 'Kappa Velorum, a B-type spectroscopic binary.',
  'Navi': 'Gamma Cassiopeiae, the prototype of eruptive Be stars.',
  'Markab': 'Alpha Pegasi, a B-type giant in the Square of Pegasus.',
  'Aljanah': 'Epsilon Cygni, an orange giant.',
  'Acrab': 'Beta Scorpii, a multiple system of hot stars.',
  'Zubenelgenubi': 'Alpha Librae, a wide double star.',
  'Unukalhai': 'Alpha Serpentis, an orange giant.',
  'Sheratan': 'Beta Arietis, a spectroscopic binary.',
  'Phact': 'Alpha Columbae, a fast-rotating Be star.',
  'Kraz': 'Beta Corvi, a yellow bright giant.',
  'Ruchbah': 'Delta Cassiopeiae, an eclipsing binary.',
  'Muphrid': 'Eta Boötis, a nearby subgiant.',
  'Tarazed': 'Gamma Aquilae, an orange bright giant.',
  'Porrima': 'Gamma Virginis, a famous binary of two F-type stars with a 169-year orbit.',
  'Zosma': 'Delta Leonis, an A-type star on the Lion\'s back.',
  'Tureis': 'Rho Puppis, a Delta Scuti variable.',
  'Sadalsuud': 'Beta Aquarii, a yellow supergiant.',
  'Sadalmelik': 'Alpha Aquarii, a yellow supergiant.',
  'Nihal': 'Beta Leporis, a yellow bright giant.',
  'Arneb': 'Alpha Leporis, a white supergiant.',
  'Mira': 'The prototype pulsating variable, a red giant that swings from naked-eye visibility to invisibility every 332 days, trailing a 13-light-year tail of shed material.',
  'Achird': 'Eta Cassiopeiae, a nearby Sun-like star with an orange dwarf companion.',
  'Rana': 'Delta Eridani, a nearby orange subgiant.',
  'Cursa': 'Beta Eridani, a white giant.',
  'Tabit': 'Pi3 Orionis, a nearby F-type star.',
  'Alderamin': 'Alpha Cephei, a rapidly rotating white star that will be the pole star around 7500 AD.',
  'Cebalrai': 'Beta Ophiuchi, an orange giant.',
  'Yed Prior': 'Delta Ophiuchi, a red giant.',
  'Alfirk': 'Beta Cephei, the prototype of a class of pulsating variables.',
  'Errai': 'Gamma Cephei, an orange subgiant with a planet and a red dwarf companion; a future pole star.',
  'Segin': 'Epsilon Cassiopeiae, a B-type giant.',
  'Alrescha': 'Alpha Piscium, a close double star.',
  'Gienah': 'Gamma Corvi, a B-type giant.',
  'Alcyone': 'Eta Tauri, the brightest star of the Pleiades, a blue giant with a gaseous disk.',
  'Atlas': 'Star of the Pleiades, father of the Seven Sisters in mythology.',
  'Electra': 'Blue giant of the Pleiades.',
  'Maia': 'Blue giant of the Pleiades, the prototype of a disputed variable class.',
  'Merope': 'Pleiades star embedded in the Merope reflection nebula.',
  'Taygeta': 'Blue subgiant of the Pleiades.',
  'Pleione': 'Rapidly rotating shell star in the Pleiades.',
  'Celaeno': 'One of the fainter Seven Sisters.',
  'Asterope': 'Sterope I, a Pleiades star.',
  'Barnard\'s Star': 'Red dwarf 6 light-years away with the largest proper motion of any star, crossing a Moon\'s width of sky every 180 years. It hosts several small planets.',
  'Wolf 359': 'One of the nearest stars, a dim red dwarf and flare star at 7.9 light-years.',
  'Lalande 21185': 'Nearby red dwarf 8.3 light-years away with planets.',
  'Luyten\'s Star': 'Red dwarf 12.3 light-years away hosting a habitable-zone super-Earth.',
  'Kapteyn\'s Star': 'Nearby halo red dwarf moving retrograde around the Galaxy.',
  'Teegarden\'s Star': 'Ultra-cool red dwarf 12.5 light-years away with two Earth-mass planets in its habitable zone.',
  'Groombridge 1830': 'Halo star passing through the solar neighbourhood at high velocity.',
  'Van Maanen 2': 'The nearest solitary white dwarf, 14 light-years away.',
  'Tau Ceti': 'Nearby Sun-like star 12 light-years away with a debris disk and several candidate planets.',
  'Ran': 'Epsilon Eridani, a young Sun-like star 10.5 light-years away with a giant planet and asteroid belts.',
  'Fafnir': '42 Draconis, an orange giant with a planet.',
  'Helvetios': '51 Pegasi, host of the first exoplanet found around a Sun-like star (1995), which won the 2019 Nobel Prize in Physics.',
  'Dimidium': 'Planet 51 Pegasi b, the first hot Jupiter.',
  'Cervantes': 'Mu Arae, a Sun-like star with four planets.',
  'Copernicus': '55 Cancri A, hosting five known planets.',
  'Alsafi': 'Sigma Draconis, a nearby orange dwarf.',
  'Chara': 'Beta Canum Venaticorum, one of the most Sun-like nearby stars.',
  'Keid': '40 Eridani A, a nearby triple system including a white dwarf; fictional home of Vulcan.',
  'Gliese 1': 'Nearby red dwarf.',
  'Alsafi': 'Sigma Draconis, a nearby orange dwarf.',
  'Chertan': 'Theta Leonis, an A-type star.',
  'Thuban': 'Alpha Draconis, the pole star at the time the Egyptian pyramids were built.',
  'Sualocin': 'Alpha Delphini, named after astronomer Nicolaus Venator backwards.',
  'Rotanev': 'Beta Delphini, Venator spelled backwards.',
  'Albireo': 'Beta Cygni, the sky\'s most famous colour-contrast double star, gold and blue.',
  'Zubeneschamali': 'Beta Librae, the only naked-eye star sometimes described as greenish.',
  'Ain': 'Epsilon Tauri, an orange giant in the Hyades with a planet.',
  'Tejat': 'Mu Geminorum, a red giant variable.',
  'Propus': 'Eta Geminorum, a red giant variable with a companion.',
  'Wasat': 'Delta Geminorum, close to the position where Pluto was discovered.',
  'Meissa': 'Lambda Orionis, a hot O-type star at Orion\'s head.',
  'Hatysa': 'Iota Orionis, a massive multiple system at the tip of Orion\'s sword.',
  'Furud': 'Zeta Canis Majoris, a B-type spectroscopic binary.',
  'Muliphein': 'Gamma Canis Majoris, a B-type star.',
  'Adhil': 'Xi Andromedae, an orange giant.',
  'Alcor': 'Companion of Mizar, together forming the horse and rider.',
  'Alkes': 'Alpha Crateris, an orange giant.',
  'Alula Australis': 'Xi Ursae Majoris, the first binary star with a computed orbit.',
  'Talitha': 'Iota Ursae Majoris, a multiple system.',
  'Tania Australis': 'Mu Ursae Majoris, a red giant.',
  'Alzirr': 'Xi Geminorum, an F-type subgiant.',
  'Sceptrum': '53 Eridani, an orange giant.',
  'Zaurak': 'Gamma Eridani, a red giant.',
  'Azha': 'Eta Eridani, an orange giant.',
  'Beid': 'Omicron1 Eridani, a yellow giant.',
  'Angetenar': 'Tau2 Eridani, an orange giant.',
  'Theemin': 'Upsilon2 Eridani, a yellow giant.',
  'Acamar': 'Theta Eridani, a binary of two A-type stars.',
  'Kurhah': 'Xi Cephei, a multiple system.',
  'Tonatiuh': 'HD 104985, a giant with a planet.',
  'Intercrus': 'HD 81688, a giant with a planet.',
  'Tabit': 'Pi3 Orionis, a nearby F-type dwarf.',
  'UY Scuti': 'One of the largest stars known, a red hypergiant about 1,700 times the Sun\'s radius.',
  'VY Canis Majoris': 'Red hypergiant, one of the largest and most luminous stars known, shedding mass in huge outbursts.',
  'Eta Carinae': 'Luminous blue variable of over 100 solar masses that briefly became the second-brightest star in the sky during its Great Eruption of 1843. It is surrounded by the Homunculus Nebula it ejected.',
  'Gliese 581': 'Red dwarf 20 light-years away with several planets.',
  'Trappist-1': 'Ultra-cool dwarf 40 light-years away with seven Earth-sized planets, three in the habitable zone.',
  'Kepler-186': 'Red dwarf with the first Earth-sized planet found in a habitable zone.',
  'Alpha Centauri': 'Nearest star system to the Sun.',
};

function norm(s) {
  return s.toUpperCase().replace(/\s+/g, '').replace(/^([A-Z]+)0+(\d)/, '$1$2');
}

function parseTxt(txt) {
  const out = {};
  for (const line of txt.split('\n')) {
    const t = line.trim();
    if (!t) continue;
    const [name, d, common, desc] = t.split('|');
    out[norm(name)] = { d: parseFloat(d), common: common || '', desc: desc || '' };
  }
  return out;
}

export const CURATED = { ...parseTxt(NGC_TXT), ...parseTxt(MESSIER_TXT) };
export { norm };
