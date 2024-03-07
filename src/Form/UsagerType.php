<?php

namespace App\Form;

use App\Cerfa\Adresse;
use App\Cerfa\Personne;
use App\Cerfa\Usager;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UsagerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('sexe', ChoiceType::class, [
                'choices' => [
                    'Homme' => 'M',
                    'Femme' => 'F'
                ],
                'expanded' => true,
                'multiple' => false,
            ])
            ->add('nom', TextType::class, [
                'required' => false,
            ])
            ->add('nomDUsage', TextType::class, [
                'required' => false,
                'label' => 'Nom d\'usage',
            ])
            ->add('origineNomDUsage', ChoiceType::class, [
                'choices' => [
                    '---' => '',
                    'Père' => 'pere',
                    'Mère' => 'mere',
                    'Époux' => 'epoux',
                    'Épouse' => 'epouse',
                ],
                'expanded' => true,
                'multiple' => false,
                'label' => 'Origine du nom d\'usage',
            ])
            ->add('motAvantNomDUsage', ChoiceType::class, [
                'choices' => [
                    'aucun' => '',
                    'époux(se)' => 'époux(se)',
                    'veuf(ve)' => 'veuf(ve)'
                ],
                'expanded' => true,
                'multiple' => false,
                'label' => 'Mot avant le nom d\'usage',
            ])
            ->add('prenoms', TextType::class)
            ->add('dateNaissance', DateType::class)
            ->add('villeNaissance', TextType::class)
            ->add('nationalite', TextType::class)
            ->add('taille', IntegerType::class)
            ->add('departementNaissance', TextType::class)
            ->add('paysNaissance', TextType::class)
            ->add('adresses', CollectionType::class, [
                'entry_type' => AdresseType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'prototype' => true,
                'prototype_name' => '__name__',
            ])
            ->add('telephone', TextType::class)
            ->add('couleurYeux', ChoiceType::class, [
                'choices' => [
                    'Marrons' => 'Marrons',
                    'Verts' => 'Verts',
                    'Bleus' => 'Bleus',
                    'Albinos' => 'Albinos',
                    'Bleus-Gris' => 'Bleus-Gris',
                    'Bleus-Verts' => 'Bleus-Verts',
                    'Gris' => 'Gris',
                    'Gris-verts' => 'Gris-verts',
                    'Marron-verts' => 'Marron-verts',
                    'Noirs' => 'Noirs',
                    'Noisettes' => 'Noisettes',
                    'Vairons' => 'Vairons',

                ]
            ])
            ->add('parents', CollectionType::class, [
                'entry_type' => PersonneType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'prototype' => true,
                'prototype_name' => '__name__',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Usager::class,
        ]);
    }
}
