        $data = $patient->data;

        $requirements = [
            'skrining.1_data_podpisaniya_informirovannogo_soglasiya.' => 'Дата подписания информированного согласия',
            'skrining.gender.' => 'Пол',
            'fizicheskie_parametri_i_pulysoksimetriya.01.field_group_f3_a.4.2' => 'Артериальное давление, измеряемое в положении сидя на правой руке в мм рт. ст. (систолическое)',
            'fizicheskie_parametri_i_pulysoksimetriya.01.field_group_f3_a.4.3' => 'Артериальное давление, измеряемое в положении сидя на правой руке в мм рт. ст. (диастолическое)',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.1_forma_grudnoy_kletki' => 'Форма грудной клетки',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.2_deformatsiya_grudnoy_kletki' => 'Деформация грудной клетки',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.3_simmetrichnosty_grudnoy_kletki' => 'Симметричность грудной клетки',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.4_ekskursiya_grudnoy_kletki' => 'Экскурсия грудной клетки',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.tip_dihaniya' => 'Тип дыхания',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.ritm_dihaniya' => 'Ритм дыхания',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.7_voice_shake.field_group_f5_7.01' => 'Голосовое дрожание
симметричное',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.nizhnie_granitsi_legkih' => 'Нижние границы легких',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.9_lung_percussion.01' => 'При перкуссии легких',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.10_auscultation_breath' => 'При аускультации дыхание',
            'klinicheskoe_obsledovanie_legkih_po_stanford_25.11_wheezing' => 'Хрипы',
            'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.1_oblasty_serdtsa_i_sosudov' => 'Область сердца и сосудов',
            'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.2_verhushechniy_tolchok' => 'Верхушечный толчок',
            'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.3_granitsi_otnositelynoy_tuposti_serdtsa' => 'Границы относительной тупости сердца
в пределах нормы',
            'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.4_granitsi_absolyutnoy_tuposti_serdtsa' => 'Границы абсолютной тупости сердца',
            'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.5_shirina_sosudistogo_puchka' => 'Ширина сосудистого пучка',
            'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.6_toni_serdtsa' => 'Тоны сердца',
            'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.7_shumi_serdtsa' => 'Шумы сердца',
            'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.8_pulys_na_obeih_verhnih_konechnostyah' => 'Пульс на обеих верхних конечностях',
            'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.9_nalichie_perifericheskih_otekov' => 'Наличие периферических отеков',
            'fizicheskie_parametri_i_pulysoksimetriya.03.field_group_f3_c.01' => 'Окружность талии (см)',
            'dannie_laboratornih_issledovaniy.02.table_f10_2_part.7.2' => 'Триглицериды',
            'dannie_laboratornih_issledovaniy.02.table_f10_2_part.4.2' => 'Холестерин-ЛПВП',
            'dannie_laboratornih_issledovaniy.02.table_f10_2_part.9.2' => 'Глюкоза',
            'skrining.3_skolyko_vam_polnih_let' => 'Сколько вам полных лет',
            'dannie_laboratornih_issledovaniy.02.table_f10_2_part.3.2' => 'Холестерин общий',
            'skrining.6_kurite_li_vi_v_nastoyashtee_vremya_sigareti_ili_aykos_hiyti_ezhednevno?' => 'Курите ли Вы в настоящее время сигареты или айкос хийты ежедневно',
            'skrining.birthDate' => 'Укажите, пожалуйста, дату Вашего рождения (дд, мм, гг)',
            'fizicheskie_parametri_i_pulysoksimetriya.03.field_group_f3_c.05' => 'Рост (см)',
            'fizicheskie_parametri_i_pulysoksimetriya.03.field_group_f3_c.03' => 'Вес (кг)',
            'fizicheskie_parametri_i_pulysoksimetriya.02.field_group_f3_b.01' => 'Частота сердечных сокращений в уд/мин 1',
            'fizicheskie_parametri_i_pulysoksimetriya.02.field_group_f3_b.02' => 'Частота сердечных сокращений в уд/мин 2',
            'fizicheskie_parametri_i_pulysoksimetriya.02.field_group_f3_b.03' => 'Частота сердечных сокращений в уд/мин 3',
            'fizicheskie_parametri_i_pulysoksimetriya.04.field_group_f3_d.01' => 'Насыщение гемоглобина кислородом (%)',
            'ishodniy_vizit.kakova_vasha_natsionalynosty?' => 'Национальность',
            'ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.1.2' => 'F1. Вопросы с использованием шкалы 1',
            'ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.2.2' => 'F1. Вопросы с использованием шкалы 2',
            'ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.3.2' => 'F1. Вопросы с использованием шкалы 3',
            'ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.4.2' => 'F1. Вопросы с использованием шкалы 4',
            'ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.5.2' => 'F1. Вопросы с использованием шкалы 5',
            'ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.6.2' => 'F1. Вопросы с использованием шкалы 6',
            'ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.7.2' => 'F1. Вопросы с использованием шкалы 7',
            'ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.8.2' => 'F1. Вопросы с использованием шкалы 8',
            '6-minutniy_test_hodyboy.obshtaya_proydennaya_distantsiya_(m)' => 'Общая пройденная дистанция (м)',
            'elektrokardiografiya.1_analysis_duration_teeth_intervals.field_group_f6_1.01' => 'Анализ продолжительности зубцов и интервалов: PQ',
            'elektrokardiografiya.1_analysis_duration_teeth_intervals.field_group_f6_1.02' => 'Анализ продолжительности зубцов и интервалов: QRS',
            'elektrokardiografiya.1_analysis_duration_teeth_intervals.field_group_f6_1.03' => 'Анализ продолжительности зубцов и интервалов: QT',
            'elektrokardiografiya.1_analysis_duration_teeth_intervals.field_group_f6_1.04' => 'Анализ продолжительности зубцов и интервалов: RR',
            'elektrokardiografiya.zaklyuchenie' => 'Электрокардиограмма: заключение',
            'cpirometriya.prirost_ofv1_(%)_posle_probi_s_bronholitikom:' => 'Прирост ОФВ1 (%) после пробы с бронхолитиком',
            'cpirometriya.02.field_group_f7_a.01' => 'FEV1 (1) до пробы с бронхолитиком',
            'cpirometriya.02.field_group_f7_a.02' => 'FEV1 (2) до пробы с бронхолитиком',
            'cpirometriya.02.field_group_f7_a.03' => 'FEV1 (3) до пробы с бронхолитиком',
            'cpirometriya.04.field_group_f7_c.01' => 'FVC (1) до пробы с бронхолитиком',
            'cpirometriya.04.field_group_f7_c.02' => 'FVC (2) до пробы с бронхолитиком',
            'cpirometriya.04.field_group_f7_c.03' => 'FVC (3) до пробы с бронхолитиком',
            'cpirometriya.04.field_group_f7_a2.01' => 'FEV1 (1) после пробы с бронхолитиком',
            'cpirometriya.04.field_group_f7_a2.02' => 'FEV1 (2) после пробы с бронхолитиком',
            'cpirometriya.04.field_group_f7_a2.03' => 'FEV1 (3) после пробы с бронхолитиком',
            'cpirometriya.04.field_group_f7_c2.01' => 'FVC (1) после пробы с бронхолитиком',
            'cpirometriya.04.field_group_f7_c2.02' => 'FVC (2) после пробы с бронхолитиком',
            'cpirometriya.04.field_group_f7_c2.03' => 'FVC (3) после пробы с бронхолитиком',
        ];

        $date = Carbon::parse($data->skrining.1_data_podpisaniya_informirovannogo_soglasiya.);
        $month = $date->month; //month name in russian

        $gender = $data->Screening.gender.;

        $date = $date->format("«d» $month Y");

        $ad1 = (int)$data->fizicheskie_parametri_i_pulysoksimetriya.01.field_group_f3_a.4.2;
        $ad2 = (int)$data->fizicheskie_parametri_i_pulysoksimetriya.01.field_group_f3_a.4.3;

        //get data from the 2nd visit of Stanford forms

        //lungs
        $stanL1 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.1_forma_grudnoy_kletki'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.1_forma_grudnoy_kletki');
        $stanL2 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.2_deformatsiya_grudnoy_kletki'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.2_deformatsiya_grudnoy_kletki');
        $stanL3 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.3_simmetrichnosty_grudnoy_kletki'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.3_simmetrichnosty_grudnoy_kletki');
        $stanL4 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.4_ekskursiya_grudnoy_kletki'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.4_ekskursiya_grudnoy_kletki');
        $stanL5 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.tip_dihaniya'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.tip_dihaniya');
        $stanL6 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.ritm_dihaniya'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.ritm_dihaniya');
        $stanL7 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.7_voice_shake.field_group_f5_7.01'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.7_voice_shake.field_group_f5_7.01');
        $stanL8 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.nizhnie_granitsi_legkih'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.nizhnie_granitsi_legkih');
        $stanL9 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.9_lung_percussion.01'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.9_lung_percussion.01');
        $stanL10 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.10_auscultation_breath'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.10_auscultation_breath');
        $stanL11 = (new JsonManipulator('survey2_klinicheskoe_obsledovanie_serdtsa_po_stanford_25._basic', $data->{'klinicheskoe_obsledovanie_legkih_po_stanford_25.11_wheezing'}))->field('klinicheskoe_obsledovanie_legkih_po_stanford_25.11_wheezing');

        //heart
        $stanH1 = (new JsonManipulator('survey2_fizicheskie_parametri_i_pulysoksimetriya._basic', $data->{'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.1_oblasty_serdtsa_i_sosudov'}))->field('klinicheskoe_obsledovanie_serdtsa_po_stanford_25.1_oblasty_serdtsa_i_sosudov');
        $stanH2 = (new JsonManipulator('survey2_fizicheskie_parametri_i_pulysoksimetriya._basic', $data->{'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.2_verhushechniy_tolchok'}))->field('klinicheskoe_obsledovanie_serdtsa_po_stanford_25.2_verhushechniy_tolchok');
        $stanH3 = (new JsonManipulator('survey2_fizicheskie_parametri_i_pulysoksimetriya._basic', $data->{'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.3_granitsi_otnositelynoy_tuposti_serdtsa'}))->field('klinicheskoe_obsledovanie_serdtsa_po_stanford_25.3_granitsi_otnositelynoy_tuposti_serdtsa');
        $stanH4 = (new JsonManipulator('survey2_fizicheskie_parametri_i_pulysoksimetriya._basic', $data->{'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.4_granitsi_absolyutnoy_tuposti_serdtsa'}))->field('klinicheskoe_obsledovanie_serdtsa_po_stanford_25.4_granitsi_absolyutnoy_tuposti_serdtsa');
        $stanH5 = (new JsonManipulator('survey2_fizicheskie_parametri_i_pulysoksimetriya._basic', $data->{'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.5_shirina_sosudistogo_puchka'}))->field('klinicheskoe_obsledovanie_serdtsa_po_stanford_25.5_shirina_sosudistogo_puchka');
        $stanH6 = (new JsonManipulator('survey2_fizicheskie_parametri_i_pulysoksimetriya._basic', $data->{'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.6_toni_serdtsa'}))->field('klinicheskoe_obsledovanie_serdtsa_po_stanford_25.6_toni_serdtsa');
        $stanH7 = (new JsonManipulator('survey2_fizicheskie_parametri_i_pulysoksimetriya._basic', $data->{'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.7_shumi_serdtsa'}))->field('klinicheskoe_obsledovanie_serdtsa_po_stanford_25.7_shumi_serdtsa');
        $stanH8 = (new JsonManipulator('survey2_fizicheskie_parametri_i_pulysoksimetriya._basic', $data->{'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.8_pulys_na_obeih_verhnih_konechnostyah'}))->field('klinicheskoe_obsledovanie_serdtsa_po_stanford_25.8_pulys_na_obeih_verhnih_konechnostyah');
        $stanH9 = (new JsonManipulator('survey2_fizicheskie_parametri_i_pulysoksimetriya._basic', $data->{'klinicheskoe_obsledovanie_serdtsa_po_stanford_25.9_nalichie_perifericheskih_otekov'}))->field('klinicheskoe_obsledovanie_serdtsa_po_stanford_25.9_nalichie_perifericheskih_otekov');

        $hip = (float) $data->fizicheskie_parametri_i_pulysoksimetriya.03.field_group_f3_c.01;

        //compare hip with fix values (different value for men and women) and in case the value fits assign 1 point
        $hip_point = $hip > ($gender === 'male' ? 102 : 88) ? 1 : 0;

        $trig = (float) $data->dannie_laboratornih_issledovaniy.02.table_f10_2_part.7.2;

        $trig_point = $trig > 1.7 ? 1 : 0;

        $chol = (float) $data->dannie_laboratornih_issledovaniy.02.table_f10_2_part.4.2;

        $chol_point = $chol < ($gender === 'male' ? 1.03 : 1.29) ? 1 : 0;

        $ad_point = ($ad1 >= 130) && ($ad2 >= 85) ? 1 : 0;

        $glucose = (float) $data->dannie_laboratornih_issledovaniy.02.table_f10_2_part.9.2;
        $glucose_point = $glucose >= 5.6 ? 1 : 0;

        $total_point = $chol_point + $trig_point + $hip_point + $ad_point + $glucose_point;

        $age = (int) $data->skrining.3_skolyko_vam_polnih_let;
        $totalChol = (float) $data->dannie_laboratornih_issledovaniy.02.table_f10_2_part.3.2;

        //code of the `calculateScore` function below
        $score = $this->calculateScore($gender, $ad1, ($data->skrining.6_kurite_li_vi_v_nastoyashtee_vremya_sigareti_ili_aykos_hiyti_ezhednevno? === '1' || $data->skrining.6_kurite_li_vi_v_nastoyashtee_vremya_sigareti_ili_aykos_hiyti_ezhednevno? === 'yes'), $age, $totalChol);

        $height = (float) $data->fizicheskie_parametri_i_pulysoksimetriya.03.field_group_f3_c.05;

        //we do need to determinate if patient is an asian. Basically, there is only one 100% asian nation in a list - kazakh. So, we just check this.
        $isAsian = (int)$data->ishodniy_vizit.kakova_vasha_natsionalynosty? === 1;

        //get a max value out of fev's
        $bestFev1Before = max([(float)$data->cpirometriya.02.field_group_f7_a.01, (float)$data->cpirometriya.02.field_group_f7_a.02, (float)$data->cpirometriya.02.field_group_f7_a.03]);
        $bestFev1After = max([(float)$data->cpirometriya.04.field_group_f7_a2.01, (float)$data->cpirometriya.04.field_group_f7_a2.02, (float)$data->cpirometriya.04.field_group_f7_a2.03]);|
        $properFev1 = $gender === 'male' ? ((0.043 * $height) - (0.029 * $age) - 2.49) : ((0.0395 * $height) - (0.025 * $age) - 2.60);

        if ($isAsian) $properFev1 -= $properFev1 * 0.07;

        $properFev1 = (float)number_format($properFev1, 2);

        $bestFvcBefore = max([(float)$data->cpirometriya.04.field_group_f7_c.01, (float)$data->cpirometriya.04.field_group_f7_c.02, (float)$data->cpirometriya.04.field_group_f7_c.03]);
        $bestFvcAfter = max([(float)$data->cpirometriya.04.field_group_f7_c2.01, (float)$data->cpirometriya.04.field_group_f7_c2.02, (float)$data->cpirometriya.04.field_group_f7_c2.03]);
        $properFvc = $gender === 'male' ? ((0.0576 * $height) - (0.026 * $age) - 4.34) : ((0.0443 * $height) - (0.026 * $age) - 2.89);

        if ($isAsian) $properFvc -= $properFvc * 0.07;

        $properFvc = (float)number_format($properFvc, 2);
        //we do need to round those values
        $fev1Before = $bestFev1Before / $properFev1 * 100;
        $fev1Before = number_format($fev1Before, 2);

        $fev1After = $bestFev1After / $properFev1 * 100;
        $fev1After = number_format($fev1After, 2);

        $fvcBefore = $bestFvcBefore / $properFvc * 100;
        $fvcBefore = number_format($fvcBefore, 2);

        $fvcAfter = $bestFvcAfter / $properFvc * 100;
        $fvcAfter = number_format($fvcAfter, 2);

        $fev1BeforeToFvc = $bestFev1Before / $bestFvcBefore * 100;
        $fev1BeforeToFvc = number_format($fev1BeforeToFvc, 2);

        $fev1ToFvc = $bestFev1After / $bestFvcAfter * 100;
        $fev1ToFvc = number_format($fev1ToFvc, 2);

        $dataArr = [
            'birthday' => Carbon::parse($data->skrining.birthDate)->format('d.m.Y'),
            'date' => $date,
            'gender' => $gender === 'male' ? 'мужской' : 'женский',
            'height' => $height,
            'weight' => $data->fizicheskie_parametri_i_pulysoksimetriya.03.field_group_f3_c.03,
            'index' => number_format(((float)$data->fizicheskie_parametri_i_pulysoksimetriya.03.field_group_f3_c.03 / pow((float)$data->fizicheskie_parametri_i_pulysoksimetriya.03.field_group_f3_c.05, 2) * 10000), 2),
            'patienthip' => round($hip),
            'ad' => $ad1 . "/" . $ad2,
            'chss' => round((((float)$data->fizicheskie_parametri_i_pulysoksimetriya.02.field_group_f3_b.01 + (float)$data->fizicheskie_parametri_i_pulysoksimetriya.02.field_group_f3_b.02 + (float)$data->fizicheskie_parametri_i_pulysoksimetriya.02.field_group_f3_b.03) / 3)),
            'breath' => $data->fizicheskie_parametri_i_pulysoksimetriya.04.field_group_f3_d.01,
            'stanL1' => $stanL1,
            'stanL2' => $stanL2,
            'stanL3' => $stanL3,
            'stanL4' => $stanL4,
            'stanL5' => $stanL5,
            'stanL6' => $stanL6,
            'stanL7' => $stanL7,
            'stanL8' => $stanL8,
            'stanL9' => $stanL9,
            'stanLten' => $stanL10,
            'stanLeleven' => $stanL11,
            'stanH1' => $stanH1,
            'stanH2' => $stanH2,
            'stanH3' => $stanH3,
            'stanH4' => $stanH4,
            'stanH5' => $stanH5,
            'stanH6' => $stanH6,
            'stanH7' => $stanH7,
            'stanH8' => $stanH8,
            'stanH9' => $stanH9,
            'patienthp' => (string)$hip,
            'patientpointchol' => $hip_point,
            'trig' => $trig,
            'trig_point' => $trig_point,
            'cholesterine' => $chol,
            'cholesterine_point' => $chol_point,
            'ad_point' => $ad_point,
            'glucose' => $glucose,
            'glucose_point' => $glucose_point,
            'total_point' => $total_point,
            'met_sindrome' => (int)$total_point > 2 ? 'присутствует' : 'отсутствует',
            'copd_point' => array_sum([$data->ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.1.2, $data->ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.2.2, $data->ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.3.2, $data->ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.4.2, $data->ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.5.2, $data->ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.6.2, $data->ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.7.2, $data->ishodniy_vizit.f1_answer_following_questions_scale.table_f1_f1.8.2]),
            'distance' => (int)$data->6-minutniy_test_hodyboy.obshtaya_proydennaya_distantsiya_(m),
            'pq' => $data->elektrokardiografiya.1_analysis_duration_teeth_intervals.field_group_f6_1.01,
            'qrs' => $data->elektrokardiografiya.1_analysis_duration_teeth_intervals.field_group_f6_1.02,
            'qt' => $data->elektrokardiografiya.1_analysis_duration_teeth_intervals.field_group_f6_1.03,
            'rr' => $data->elektrokardiografiya.1_analysis_duration_teeth_intervals.field_group_f6_1.04,
            'eAnswer' => $data->elektrokardiografiya.zaklyuchenie,
            'fev1Before' => $fev1Before,
            'fvcBefore' => $fvcBefore,
            'fev1BefToFvc' => $fev1BeforeToFvc,
            'fev1After' => $fev1After,
            'fvcAfter' => $fvcAfter,
            'fev1ToFvc' => $fev1ToFvc,
            'ofv1Up' => $data->cpirometriya.prirost_ofv1_(%)_posle_probi_s_bronholitikom:,
            'score' => $score,
            'age' => $age,
            'totalChol' => $totalChol,
            'puread' => $ad1,
            'isSmoker' => ($data->skrining.6_kurite_li_vi_v_nastoyashtee_vremya_sigareti_ili_aykos_hiyti_ezhednevno? === '1' || $data->skrining.6_kurite_li_vi_v_nastoyashtee_vremya_sigareti_ili_aykos_hiyti_ezhednevno? === 'yes') ? 'Да' : 'Нет' //if you have better way to determine patient either smoker or not, feel free to rewrite this one
        ];


        //string to replace with, from our *.docx template in order to fit data array
        $stringsToReplace = [
            'patientbirthday', 'patientdate', 'patientgender', 'patientheight', 'patientweight',
            'patientindex', 'hippatient', 'patientad', 'patientchss', 'patientbreath',
            'stanL1', 'stanL2', 'stanL3', 'stanL4', 'stanL5', 'stanL6', 'stanL7', 'stanL8', 'stanL9', 'stanLten', 'stanLeleven',
            'stanH1', 'stanH2', 'stanH3', 'stanH4', 'stanH5', 'stanH6', 'stanH7', 'stanH8', 'stanH9', 'patienthp',
            'patientpointhip', 'patienttrig', 'patientpointtrig', 'patientcholesterine', 'patientpointcholesterine', 'patientpointad', 'patientglucose', 'patientpointglucose', 'patientpointtotal', 'patientmetsindrome',
            'patientpointcopd', 'patientdistance',
            'patientpq', 'patientqrs', 'patientqt', 'patientrr', 'patienteAnswer',
            'fev1Before', 'fvcBefore', 'fev1BefToFvc', 'fev1After', 'fvcAfter', 'fev1ToFvc', 'patientofvUp',
            'patientscore', 'patientage', 'patienttotalChol', 'patientpuread', 'patientisSmoker'
        ];

        //then, just open up your file, with *.docx manipulating library and replace static strings with the data ones


//calculate score function
function calculateScore($gender, $ad, $smoke, $age, $chol)
    {
        $age = (float)$age;
        $smoke = $smoke ? 1 : 0;
        $ad = (float)$ad;
        $chol = (float)$chol;
        if ($gender === 'male') {
            $alpha = -21.0;
            $p = 4.62;
        } else {
            $alpha = -28.7;
            $p = 6.23;
        }
        $cs0 = exp(-exp($alpha) * pow($age - 20.0, $p));
        $cs10 = exp(-exp($alpha) * pow($age - 10.0, $p));

        if ($gender === 'male') {
            $alpha = -25.7;
            $p = 5.47;
        } else {
            $alpha = -30.0;
            $p = 6.42;
        }


        $ncs0 = exp(-exp($alpha) * pow($age - 20.0, $p));

        $ncs10 = exp(-exp($alpha) * pow($age - 10.0, $p));

        $bchol = 0.24;
        $bsbp = 0.018;
        $bsm = $smoke * 0.71;
        $wc = $bchol * ($chol - 6.0) + $bsbp * ($ad - 120.0) + $bsm;


        $bchol = 0.02;
        $bsbp = 0.022;
        $bsm = $smoke * 0.63;
        $wnc = $bchol * ($chol - 6.0) + $bsbp * ($ad - 120.0) + $bsm;


        $cs = pow($cs0, exp($wc));

        $cs1 = pow($cs10, exp($wc));

        $ncs = pow($ncs0, exp($wnc));

        $ncs1 = pow($ncs10, exp($wnc));

        $cs1 = $cs1 / $cs;
        $ncs1 = $ncs1 / $ncs;

        $r = 1.0 - $cs1;
        $r1 = 1.0 - $ncs1;
        return round((100.0 * ($r + $r1)));
    }