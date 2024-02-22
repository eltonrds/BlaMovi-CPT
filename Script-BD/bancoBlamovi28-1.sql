CREATE DATABASE  IF NOT EXISTS `bd_blamovi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_blamovi`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_blamovi
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `id_comentario` binary(16) NOT NULL,
  `id_usuario` binary(16) NOT NULL,
  `id_post` binary(16) NOT NULL,
  `texto` varchar(255) NOT NULL,
  PRIMARY KEY (`id_comentario`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_post` (`id_post`),
  CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `post` (`id_post`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (_binary '\'â‹œ¾-î «1¿\ÕI‚',_binary '\Z\çD»7î¾®1¿\ÕI‚',_binary 'ðž›‡¾,î «1¿\ÕI‚','esse filme me marcou porque eu tinha o dvd desse filme e eu adorava e Ã© por isso que eu dou nota 100%.'),(_binary '-Ê‹Ä¾2î «1¿\ÕI‚',_binary '-¦h©»7î¾®1¿\ÕI‚',_binary '!<„¾2î «1¿\ÕI‚','Excepcional,  a definiÃ§Ã£o perfeita para uma obra prima em nossos dias.'),(_binary '3AG¾0î «1¿\ÕI‚',_binary '*\ãŒ|»9î¾®1¿\ÕI‚',_binary '¯Â¦¾0î «1¿\ÕI‚','Uau...Que filme mais show! Muito bom chegar ao 5Âº filme com uma histÃ³ria tÃ£o original e totalmente fora do que possa imaginar ser...'),(_binary '6|*‚¾7î «1¿\ÕI‚',_binary '¡€‘0»7î¾®1¿\ÕI‚',_binary 'ý•¾¾7î «1¿\ÕI‚','A lendÃ¡ria sÃ©rie clÃ¡ssica para TV! Essa animaÃ§Ã£o Ã© antiga mas nÃ£o perde a graÃ§a, esse programa Ã© incrÃ­vel, os personagens sÃ£o Ã³timos, as piadas sÃ£o muito engraÃ§adas.'),(_binary '6\æ\í¾/î «1¿\ÕI‚',_binary '¿‡T»9î¾®1¿\ÕI‚',_binary '_j\Ö{¾-î «1¿\ÕI‚','Gostei muito da sÃ©rie. Mas esse personagem do Hugh Ã© um saco, a todo momento reclamando, chorando.'),(_binary 'Z”£\ä¾1î «1¿\ÕI‚',_binary '-¦h©»7î¾®1¿\ÕI‚',_binary '3p¾1î «1¿\ÕI‚','Excepcional,  a definiÃ§Ã£o perfeita para uma obra prima em nossos dias.'),(_binary '™S¾3î «1¿\ÕI‚',_binary '±\ÑW¬»6î¾®1¿\ÕI‚',_binary '5û=¯¾3î «1¿\ÕI‚','Mesmo tendo mais de 1000 episÃ³dios kk, que pra mim agora Ã© pouco. Perdi a conta de quantas vezes me emocionei nesse anime. Enfim recomendo pra qualquer um, assista vale cada ep.'),(_binary 'ª6{@¾-î «1¿\ÕI‚',_binary ' µE}»9î¾®1¿\ÕI‚',_binary '_j\Ö{¾-î «1¿\ÕI‚','...Vale apena assistir , muito bom ..'),(_binary '¼\r¨i¾,î «1¿\ÕI‚',_binary ';Áø»9î¾®1¿\ÕI‚',_binary '\ÕyCµ¾+î «1¿\ÕI‚','Contar uma histÃ³ria jÃ¡ conhecida Ã© um desafio. Encontrar uma nova perspectiva, uma abordagem que traga algo inÃ©dito Ã© crucial.'),(_binary '÷T4¾4î «1¿\ÕI‚',_binary '¾‹±»7î¾®1¿\ÕI‚',_binary '\ÄW<¾4î «1¿\ÕI‚','A lendÃ¡ria sÃ©rie clÃ¡ssica para TV! Essa animaÃ§Ã£o Ã© antiga mas nÃ£o perde a graÃ§a, esse programa Ã© incrÃ­vel, os personagens sÃ£o Ã³timos, as piadas sÃ£o muito engraÃ§adas.');
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id_post` binary(16) NOT NULL,
  `id_video` binary(16) NOT NULL,
  `id_usuario` binary(16) NOT NULL,
  `quantidadeCurtida` int DEFAULT NULL,
  `texto` varchar(255) NOT NULL,
  `fotoPost` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_post`),
  KEY `id_video` (`id_video`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`id_video`) REFERENCES `video` (`id_video`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (_binary '¯Â¦¾0î «1¿\ÕI‚',_binary 'ÂŽ6§¾/î «1¿\ÕI‚',_binary '*\ãŒ|»9î¾®1¿\ÕI‚',1697,'As pessoas que estÃ£o reclamando do filme ser politizado provavelmente nÃ£o assistiram os filmes anteriores, jÃ¡ que, o lado polÃ­tico dessa franquia Ã© enfatizado desde o segundo filme.',NULL),(_binary '¤Y¾/î «1¿\ÕI‚',_binary '´®»¾.î «1¿\ÕI‚',_binary '$ºvÚ»8î¾®1¿\ÕI‚',2917,'Um \'Watchmen\' para principiantes. Quem jÃ¡ estÃ¡ acostumado com filmes e sÃ©ries que desconstroem a idÃ©ia de super-herÃ³i, principalmente quando baseados nas obras de Alan Moore, como V de VinganÃ§a.',NULL),(_binary '!<„¾2î «1¿\ÕI‚',_binary '\Éôv¾1î «1¿\ÕI‚',_binary '<˜+x»7î¾®1¿\ÕI‚',8349,'Como filme de aÃ§Ã£o o resultado Ã© mediano, nÃ£o Ã© grande coisa mas dÃ¡ pra assistir sem grandes expectativas ou exigÃªncias.',NULL),(_binary 'ý•¾¾7î «1¿\ÕI‚',_binary '·¢|¾5î «1¿\ÕI‚',_binary 'ÝˆF¢»6î¾®1¿\ÕI‚',7227,'Ã‰ bem legal de assistir uma sÃ©rie de comÃ©dia tranquila, poderia ter segunda temporada trabalhando com serial killer e trazendo humor dentro das investigaÃ§Ãµes cenas de crimes.',NULL),(_binary '3p¾1î «1¿\ÕI‚',_binary '˜¶pr¾0î «1¿\ÕI‚',_binary '-¦h©»7î¾®1¿\ÕI‚',4891,'Um filme que te prende do inÃ­cio ao fim. Por muitas vezes nos tranportamos para dentros dos carros.O som  dos motores rocando merecem destaque.',NULL),(_binary '5û=¯¾3î «1¿\ÕI‚',_binary 'ôµ+¦¾2î «1¿\ÕI‚',_binary '¡€‘0»7î¾®1¿\ÕI‚',8349,'Como descrever o melhor anime de sempre? Eiichiro Oda pensou em tudo do primeiro arco ao dos dias atuais, em 1999 jÃ¡ estava a pensar em 2020, e que grande obra-prima vai criando ano apÃ³s ano.',NULL),(_binary '_j\Ö{¾-î «1¿\ÕI‚',_binary '¾* ;»:î¾®1¿\ÕI‚',_binary '\Z\çD»7î¾®1¿\ÕI‚',7538,'A estrutura da sÃ©rie Alvin e os Esquilos Ã© bem conhecida: mescla de humanos com personagens em animaÃ§Ã£o, que provocam travessuras em meio Ã  cantoria de alguns dos principais sucessos do momento.',NULL),(_binary '\ÄW<¾4î «1¿\ÕI‚',_binary 'Ž\ã3H¾4î «1¿\ÕI‚',_binary '±\ÑW¬»6î¾®1¿\ÕI‚',6114,'Pra mim o melhor seriado-sÃ©rie de todos os tempos.',NULL),(_binary '\ÕyCµ¾+î «1¿\ÕI‚',_binary 'Qÿ\ëù»:î¾®1¿\ÕI‚',_binary '¿‡T»9î¾®1¿\ÕI‚',12,'Sem palavras para descrever a qualidade deste filme. Ã‰ incrÃ­vel e realmente muito bom. Eu, particularmente, gostei e apreciei como a histÃ³ria foi abordada, sem sensacionalismo e exagero.',NULL),(_binary 'ðž›‡¾,î «1¿\ÕI‚',_binary '¦¬Þ»;î¾®1¿\ÕI‚',_binary ';Áø»9î¾®1¿\ÕI‚',6203,'A histÃ³ria se repete, a trama tem tudo para ser muito bem desenvolvida apÃ³s o primeiro plot twist do filme (surpreendente) mas, veja bem, Ã© realmente bem desenvolvida',NULL);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` binary(16) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(180) NOT NULL,
  `senha` varchar(30) NOT NULL,
  `apelido` varchar(30) NOT NULL,
  `fotoPerfil` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (_binary '¿‡T»9î¾®1¿\ÕI‚','Adriana','andriana@email.com','adriana123','Dri',NULL),(_binary ';Áø»9î¾®1¿\ÕI‚','Paulo','paulo@email.com','paulo123','Paulinho',NULL),(_binary '\Z\çD»7î¾®1¿\ÕI‚','JosÃ©','jose@email.com','jose123','ZÃ©',NULL),(_binary ' µE}»9î¾®1¿\ÕI‚','Juliana','juliana@email.com','juliana123','Juju',NULL),(_binary '$ºvÚ»8î¾®1¿\ÕI‚','Carlos','carlos@email.com','carlos123','carlinhos123',NULL),(_binary '*\ãŒ|»9î¾®1¿\ÕI‚','Pedro','pedro@email.com','pedro123','Pedrinho',NULL),(_binary '-¦h©»7î¾®1¿\ÕI‚','Maria','maria@email.com','maria123','Ma',NULL),(_binary '6\ÝõT»9î¾®1¿\ÕI‚','MÃ¡rcia','marcia@email.com','marcia123','Marcinha',NULL),(_binary '<˜+x»7î¾®1¿\ÕI‚','JoÃ£o','joao@email.com','joao123','Jo',NULL),(_binary 'L¼W»7î¾®1¿\ÕI‚','Ana','ana@email.com','ana123','Aninha',NULL),(_binary '¡€‘0»7î¾®1¿\ÕI‚','AntÃ´nio','antonio@email.com','antonio123','Toinho',NULL),(_binary '±\ÑW¬»6î¾®1¿\ÕI‚','Nicolas','nicolas@email.com','nicolas123','ncl',NULL),(_binary '¾‹±»7î¾®1¿\ÕI‚','Francisco','francisco@email.com','francisco','Chico',NULL),(_binary '\É\Ô;°»6î¾®1¿\ÕI‚','Ãgatha','agatha@email.com','agatha123','Gaga',NULL),(_binary 'ÝˆF¢»6î¾®1¿\ÕI‚','Francisca','francisca@email.com','francisca123','Fran',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `id_video` binary(16) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `genero` varchar(20) NOT NULL,
  `diretor` varchar(255) NOT NULL,
  `duracao` varchar(30) NOT NULL,
  `temporadas` int DEFAULT NULL,
  `sinopse` varchar(255) NOT NULL,
  `ano` varchar(4) NOT NULL,
  `curtida` int DEFAULT NULL,
  `elenco` varchar(255) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `poster` varchar(100) NOT NULL,
  `trailer` varchar(100) NOT NULL,
  PRIMARY KEY (`id_video`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (_binary 'Qÿ\ëù»:î¾®1¿\ÕI‚','Sociedade da Neve','Thriller/Aventura','Juan Antonio Bayona','2h 24m',NULL,'Em 1972, um voo vindo do Uruguai colide com uma geleira nos Andes. Apenas 29 dos seus 45 passageiros sobreviveram ao acidente. Presos em um dos ambientes mais hostis do planeta, eles sÃ£o forÃ§ados a lutar pelas suas vidas.','2023',12,'Enzo Vogrincic - Numa Turcatti / MatÃ­as Recalt - Roberto Canessa / Carlos PaÃ©z','Filme','sociedadeDaNeve.png','https://www.youtube.com/watch?v=9cjSePIf1l0'),(_binary 'Ž\ã3H¾4î «1¿\ÕI‚','Os Simpsons','Sitcom','Matt Groening','20m',35,'The Simpsons Ã© uma sÃ©rie animada norte americana transmitida pelo canal FOX. A comÃ©dia acompanha a famÃ­lia Simpsons, uma famÃ­lia da classe trabalhadora na cidade desajustada de Springfield.','1989',8423,'Homer Simpson - Ricardo Juarez / Marge Simpson - Myriam Thereza / Bart Simpson - Rodrigo Antas','SÃ©rie','osSimpsons.png','https://www.youtube.com/watch?v=3R1ebDCv7vM'),(_binary '˜¶pr¾0î «1¿\ÕI‚','Ford vs Ferrari','Esporte/AÃ§Ã£o','James Mangold','2h 32m',NULL,'O projetista Carroll Shelby e o piloto Ken Miles enfrentam a interferÃªncia empresarial, as leis da fÃ­sica e os prÃ³prios demÃ´nios para construir um carro de corrida para a Ford derrotar a hegemonia de Enzo Ferrari nas 24 horas de Le Mans.','2019',3266,'Christian Bale - Ken Miles / Matt Damon - Caroll Shelby / Caitriona Balfe - Mollie Miles','Filme','fordVsFerrari.png','https://www.youtube.com/watch?v=5OF_8Df78_k'),(_binary '¦¬Þ»;î¾®1¿\ÕI‚','Turma da MÃ´nica em Uma Aventura No Tempo','Aventura/FicÃ§Ã£o','Mauricio de Sousa','1h 20m',NULL,'Franjinha estÃ¡ construindo uma mÃ¡quina do tempo e precisa reunir molÃ©culas dos quatro elementos: ar, Ã¡gua, fogo e terra. MÃ´nica joga SansÃ£o e, sem querer, acerta o aparelho, espalhando os elementos. Agora a turma precisa consertÃ¡-la.','2007',2274,'Mauricio de Sousa - Bidu / Paulo Cavalcante - CascÃ£o / Marli Bortoletto - MÃ´nica','Filme','turmaDaMonicaEmUmaAventuraNoTempo.png','https://www.youtube.com/watch?v=1oNrvN0nMTk'),(_binary '´®»¾.î «1¿\ÕI‚','The Boys','Drama','Eric Kripke','1h',3,'A Terra Ã© habitada por super-herÃ³is que sÃ£o um inspiraÃ§Ã£o para a humanidade. PorÃ©m, esses protetores tÃªm um lado sinistro que a maioria das pessoas desconhece. Se eles usam seus poderes para o mal, Hughie, Billy e o resto do time devem detÃª-los.','2019',3014,'Antony Starr - CapitÃ£o PÃ¡tria / Karl Urban - Billy Butcher / Erin Moriarty - Annie January','SÃ©rie','theBoys.png','https://www.youtube.com/watch?v=3fv0iVcCeh4'),(_binary '·¢|¾5î «1¿\ÕI‚','B.O','ComÃ©dia','Leandro Hassum','25m',1,'O tÃ­mido Suzano precisa provar seu valor para sua nova equipe apÃ³s assumir a funÃ§Ã£o de delegado.','2023',7410,'Leandro Hassum - Delegado Suzano / Luciana Paes - Mantovani / Babu Carreira - InaÃª Guerra','SÃ©rie','boSerie.png','https://www.youtube.com/watch?v=z3nRex0SaMw'),(_binary '¾* ;»:î¾®1¿\ÕI‚','Alvin e os Esquilos 3','ComÃ©dia/Aventura','Mike Mitchell','1h 32m',NULL,'Dave leva Alvin, Simon, Theodore e as Esquiletes em um cruzeiro. Os esquilos sÃ³ querem se divertir e as coisas acabam ficando fora de controle. Todos acabam isolados em uma ilha deserta e passam por muitas confusÃµes.','2011',28,'Jason Lee - Dave Seville / Justin Long - Alvin Seville / David Cross - Ian Hawke','Filme','alvinEosEsquilos3.png','https://www.youtube.com/watch?v=i4FuxIMrs1g'),(_binary 'ÂŽ6§¾/î «1¿\ÕI‚','Uma Noite de Crime - A Fronteira','AÃ§Ã£o/Terror','Everardo Valerio Gout','1h 44m',NULL,'No dia seguinte ao Expurgo, uma famÃ­lia Ã© atacada por uma gangue mascarada. Enquanto o paÃ­s mergulha em um caos anÃ¡rquico de violÃªncia, o grupo descobre que hÃ¡ um movimento que pretende punir aqueles que tÃªm condiÃ§Ãµes de se proteger do dia Expurgo.','2021',5044,'Ana de la Reguera - Adela / Tenoch Huerta - Juan / Josh Lucas - Dylan','filme','theForeverPurge.png','https://www.youtube.com/watch?v=9o3bT-BpoRY'),(_binary '\Éôv¾1î «1¿\ÕI‚','Lift: Um Roubo nas Alturas','AÃ§Ã£o/ComÃ©dia','F. Gary Gray','1h 44m',NULL,'Um ladrÃ£o e sua equipe tentam fazer um assalto de 500 milhÃµes de dÃ³lares em um aviÃ£o.','2024',7369,'Ãšrsula CorberÃ³ - Camila / Kevin Hart - Cyrus / Gugu Mbatha-Raw - Abby','Filme','liftUmRouboNasAlturas.png','https://www.youtube.com/watch?v=3S5GIeLcw5A'),(_binary 'ôµ+¦¾2î «1¿\ÕI‚','One Piece','Aventura','Eiichiro Oda','22m',20,'Monkey D. Luffy e sua tripulaÃ§Ã£o de Piratas do ChapÃ©u de Palha embarcam em uma jornada incrÃ­vel para encontrar um tesouro lendÃ¡rio, o One Piece.','1999',6890,'Vyni Takahashi - Monkey D. Luff / Wendel Bezerra - Sanji / Tatiane Keplmair - Nami','Anime','onePiece.png','https://www.youtube.com/watch?v=MCb13lbVGE0');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-28 21:02:39
