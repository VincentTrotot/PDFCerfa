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
                ]
            ])
            ->add('nom', TextType::class, [
                'required' => false,
            ])
            ->add('nomDUsage', TextType::class, [
                'required' => false,
            ])
            ->add('origineNomDUsage', ChoiceType::class, [
                'choices' => [
                    '---' => '',
                    'Père' => 'pere',
                    'Mère' => 'mere',
                    'Époux' => 'epoux',
                    'Épouse' => 'epouse',
                ]
            ])
            ->add('motAvantNomDUsage', ChoiceType::class, [
                'choices' => [
                    '---' => '',
                    'époux(se)' => 'époux(se)',
                    'veuf(ve)' => 'veuf(ve)'
                ]
            ])
            ->add('prenoms', TextType::class)
            ->add('dateNaissance', DateType::class)
            ->add('villeNaissance', TextType::class)
            ->add('nationalite', TextType::class)
            ->add('taille', IntegerType::class)
            ->add('departementNaissance', TextType::class)
            ->add('paysNaissance', TextType::class)
            ->add('adresse', AdresseType::class, [
                'mapped' => false,
                'data_class' => Adresse::class,
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
            ->add('parent1', PersonneType::class, [
                'mapped' => false,
                'data_class' => Personne::class,
            ])
            ->add('parent2', PersonneType::class, [
                'mapped' => false,
                'data_class' => Personne::class,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Usager::class,
        ]);
    }
}
