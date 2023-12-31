PGDMP         0                {            bootcamp     15.3 (Ubuntu 15.3-1.pgdg22.04+1)     15.3 (Ubuntu 15.3-1.pgdg22.04+1)     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    46746    bootcamp    DATABASE     t   CREATE DATABASE bootcamp WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE bootcamp;
                postgres    false            �            1259    61387 	   bootcamps    TABLE        CREATE TABLE public.bootcamps (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    cue integer DEFAULT 0 NOT NULL,
    description character varying(500) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.bootcamps;
       public         heap    postgres    false            �            1259    61386    bootcamps_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bootcamps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.bootcamps_id_seq;
       public          postgres    false    219            �           0    0    bootcamps_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.bootcamps_id_seq OWNED BY public.bootcamps.id;
          public          postgres    false    218            �            1259    61405    user_bootcamp    TABLE     �   CREATE TABLE public.user_bootcamp (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    user_id integer NOT NULL,
    bootcamp_id integer NOT NULL
);
 !   DROP TABLE public.user_bootcamp;
       public         heap    postgres    false            �            1259    61397    users    TABLE     '  CREATE TABLE public.users (
    id integer NOT NULL,
    "firstName" character varying(50) NOT NULL,
    "lastName" character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    61396    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    221            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    220                       2604    61390    bootcamps id    DEFAULT     l   ALTER TABLE ONLY public.bootcamps ALTER COLUMN id SET DEFAULT nextval('public.bootcamps_id_seq'::regclass);
 ;   ALTER TABLE public.bootcamps ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219                       2604    61400    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �          0    61387 	   bootcamps 
   TABLE DATA           Z   COPY public.bootcamps (id, title, cue, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   �       �          0    61405    user_bootcamp 
   TABLE DATA           W   COPY public.user_bootcamp ("createdAt", "updatedAt", user_id, bootcamp_id) FROM stdin;
    public          postgres    false    222           �          0    61397    users 
   TABLE DATA           ]   COPY public.users (id, "firstName", "lastName", email, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221          �           0    0    bootcamps_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.bootcamps_id_seq', 1, false);
          public          postgres    false    218            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    220                       2606    61395    bootcamps bootcamps_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.bootcamps
    ADD CONSTRAINT bootcamps_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.bootcamps DROP CONSTRAINT bootcamps_pkey;
       public            postgres    false    219            #           2606    61409     user_bootcamp user_bootcamp_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.user_bootcamp
    ADD CONSTRAINT user_bootcamp_pkey PRIMARY KEY (user_id, bootcamp_id);
 J   ALTER TABLE ONLY public.user_bootcamp DROP CONSTRAINT user_bootcamp_pkey;
       public            postgres    false    222    222                       2606    61404    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    221            !           2606    61402    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    221            $           2606    61415 ,   user_bootcamp user_bootcamp_bootcamp_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_bootcamp
    ADD CONSTRAINT user_bootcamp_bootcamp_id_fkey FOREIGN KEY (bootcamp_id) REFERENCES public.bootcamps(id) ON UPDATE CASCADE ON DELETE CASCADE;
 V   ALTER TABLE ONLY public.user_bootcamp DROP CONSTRAINT user_bootcamp_bootcamp_id_fkey;
       public          postgres    false    3357    219    222            %           2606    61410 (   user_bootcamp user_bootcamp_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_bootcamp
    ADD CONSTRAINT user_bootcamp_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.user_bootcamp DROP CONSTRAINT user_bootcamp_user_id_fkey;
       public          postgres    false    221    3361    222            �      x������ � �      �      x������ � �      �      x������ � �     