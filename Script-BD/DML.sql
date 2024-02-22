
drop database bd_blamovi;

create database bd_blamovi;



use bd_blamovi;

create table usuario(
    id_usuario binary(16) not null,
    nome varchar(255) not null,
    email varchar(180) not null,
    senha varchar(30)  not null,
    apelido varchar(30) not null,
    data_nasc date not null,
    url_img varchar(255) not null,
    primary key (id_usuario)
);

create table video(
    id_video binary(16) not null,
    titulo varchar(100) not null,
    genero varchar(50) not null,
    diretor varchar(255) not null,
    duracao varchar(30) not null,
    temporadas int,
    sinopse varchar(255) not null,
    ano varchar(4) not null,
    curtida int,
    elenco varchar(255) not null,
    tipo varchar(20) not null,
    poster varchar(100) not null,
    trailer varchar(255) not null,
    classificacao varchar(30) not null,
    nota_total decimal not null, 
    quantidade_post decimal not null,
    primary key (id_video)
);

create table post(
    id_post binary(16) not null,
    id_video binary(16) not null,
    id_usuario binary(16) not null,
    quantidade_curtida int,
    texto varchar(255) not null,
    foto_post varchar(255),
    primary key(id_post),
    foreign key(id_video) references video(id_video),
    foreign key(id_usuario) references usuario(id_usuario)
);

create table comentario(
    id_comentario binary(16) not null,
    id_usuario binary(16) not null,
    id_post binary(16) not null,
    texto varchar(255) not null,
    primary key (id_comentario),
    foreign key (id_usuario) references usuario(id_usuario),
    foreign key (id_post) references post(id_post)
);

insert into video values(
    UUID_TO_BIN(UUID()),
    "titulo teste",
    "genero1, genero2",
    "diretor",
    "duracao",
    null,
    "sinopse",
    "2000",
    null,
    "elenco",
    "filme",
    "imagem do filme",
    "link do treiler",
    "classificacao",
    100,
    10
);

insert into usuario values(
    UUID_TO_BIN(UUID()),
    "Abreu",
    "abreu@gemail.com",
    "abreu",
    "abreu",
    "2000-01-01",
    "caminho imagem usuario"
);

insert into post values(
    UUID_TO_BIN(UUID()),
    UUID_TO_BIN("a3ca717c-c6b5-11ee-8243-a4bb6d746e70"),
    UUID_TO_BIN("a65614f8-c6b5-11ee-8243-a4bb6d746e70"),
    null,
    "testo do post",
    "imagem do post"
);

insert into comentario values(
    UUID_TO_BIN(UUID()),
    UUID_TO_BIN("a65614f8-c6b5-11ee-8243-a4bb6d746e70"),
    UUID_TO_BIN("c69ab718-c6b5-11ee-8243-a4bb6d746e70"),
    "texto do comentario"
);


select BIN_TO_UUID(id_video) from video;
select BIN_TO_UUID(id_usuario) from usuario;
select BIN_TO_UUID(id_post) from post;
select BIN_TO_UUID(id_comentario) from comentario;

select * from usuario;
select * from post;