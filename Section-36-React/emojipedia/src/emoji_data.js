const emoji_data = [
    // {
        {
          "emoji": "😀",
          "name": "grinning face",
          "slug": "grinning_face",
          "group": "Smileys & Emotion",
          "emoji_version": "1.0",
          "unicode_version": "1.0",
          "skin_tone_support": false
        },
        {
          "emoji": "😃",
          "name": "grinning face with big eyes",
          "slug": "grinning_face_with_big_eyes",
          "group": "Smileys & Emotion",
          "emoji_version": "0.6",
          "unicode_version": "0.6",
          "skin_tone_support": false
        },
         {
          "emoji":"😄",
          "name": "grinning face with smiling eyes",
          "slug": "grinning_face_with_smiling_eyes",
          "group": "Smileys & Emotion",
          "emoji_version": "0.6",
          "unicode_version": "0.6",
          "skin_tone_support": false
        },
         {
          "emoji":"😁",
          "name": "beaming face with smiling eyes",
          "slug": "beaming_face_with_smiling_eyes",
          "group": "Smileys & Emotion",
          "emoji_version": "0.6",
          "unicode_version": "0.6",
          "skin_tone_support": false
        },
    //     "😆": {
    //       "name": "grinning squinting face",
    //       "slug": "grinning_squinting_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😅": {
    //       "name": "grinning face with sweat",
    //       "slug": "grinning_face_with_sweat",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🤣": {
    //       "name": "rolling on the floor laughing",
    //       "slug": "rolling_on_the_floor_laughing",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "3.0",
    //       "unicode_version": "3.0",
    //       "skin_tone_support": false
    //     },
    //     "😂": {
    //       "name": "face with tears of joy",
    //       "slug": "face_with_tears_of_joy",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🙂": {
    //       "name": "slightly smiling face",
    //       "slug": "slightly_smiling_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🙃": {
    //       "name": "upside-down face",
    //       "slug": "upside_down_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🫠": {
    //       "name": "melting face",
    //       "slug": "melting_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "14.0",
    //       "unicode_version": "14.0",
    //       "skin_tone_support": false
    //     },
    //     "😉": {
    //       "name": "winking face",
    //       "slug": "winking_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😊": {
    //       "name": "smiling face with smiling eyes",
    //       "slug": "smiling_face_with_smiling_eyes",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😇": {
    //       "name": "smiling face with halo",
    //       "slug": "smiling_face_with_halo",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🥰": {
    //       "name": "smiling face with hearts",
    //       "slug": "smiling_face_with_hearts",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "11.0",
    //       "unicode_version": "11.0",
    //       "skin_tone_support": false
    //     },
    //     "😍": {
    //       "name": "smiling face with heart-eyes",
    //       "slug": "smiling_face_with_heart_eyes",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🤩": {
    //       "name": "star-struck",
    //       "slug": "star_struck",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "5.0",
    //       "unicode_version": "5.0",
    //       "skin_tone_support": false
    //     },
    //     "😘": {
    //       "name": "face blowing a kiss",
    //       "slug": "face_blowing_a_kiss",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😗": {
    //       "name": "kissing face",
    //       "slug": "kissing_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "☺️": {
    //       "name": "smiling face",
    //       "slug": "smiling_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😚": {
    //       "name": "kissing face with closed eyes",
    //       "slug": "kissing_face_with_closed_eyes",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😙": {
    //       "name": "kissing face with smiling eyes",
    //       "slug": "kissing_face_with_smiling_eyes",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🥲": {
    //       "name": "smiling face with tear",
    //       "slug": "smiling_face_with_tear",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "13.0",
    //       "unicode_version": "13.0",
    //       "skin_tone_support": false
    //     },
    //     "😋": {
    //       "name": "face savoring food",
    //       "slug": "face_savoring_food",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😛": {
    //       "name": "face with tongue",
    //       "slug": "face_with_tongue",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "😜": {
    //       "name": "winking face with tongue",
    //       "slug": "winking_face_with_tongue",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🤪": {
    //       "name": "zany face",
    //       "slug": "zany_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "5.0",
    //       "unicode_version": "5.0",
    //       "skin_tone_support": false
    //     },
    //     "😝": {
    //       "name": "squinting face with tongue",
    //       "slug": "squinting_face_with_tongue",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🤑": {
    //       "name": "money-mouth face",
    //       "slug": "money_mouth_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🤗": {
    //       "name": "smiling face with open hands",
    //       "slug": "smiling_face_with_open_hands",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🤭": {
    //       "name": "face with hand over mouth",
    //       "slug": "face_with_hand_over_mouth",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "5.0",
    //       "unicode_version": "5.0",
    //       "skin_tone_support": false
    //     },
    //     "🫢": {
    //       "name": "face with open eyes and hand over mouth",
    //       "slug": "face_with_open_eyes_and_hand_over_mouth",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "14.0",
    //       "unicode_version": "14.0",
    //       "skin_tone_support": false
    //     },
    //     "🫣": {
    //       "name": "face with peeking eye",
    //       "slug": "face_with_peeking_eye",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "14.0",
    //       "unicode_version": "14.0",
    //       "skin_tone_support": false
    //     },
    //     "🤫": {
    //       "name": "shushing face",
    //       "slug": "shushing_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "5.0",
    //       "unicode_version": "5.0",
    //       "skin_tone_support": false
    //     },
    //     "🤔": {
    //       "name": "thinking face",
    //       "slug": "thinking_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🫡": {
    //       "name": "saluting face",
    //       "slug": "saluting_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "14.0",
    //       "unicode_version": "14.0",
    //       "skin_tone_support": false
    //     },
    //     "🤐": {
    //       "name": "zipper-mouth face",
    //       "slug": "zipper_mouth_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🤨": {
    //       "name": "face with raised eyebrow",
    //       "slug": "face_with_raised_eyebrow",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "5.0",
    //       "unicode_version": "5.0",
    //       "skin_tone_support": false
    //     },
    //     "😐": {
    //       "name": "neutral face",
    //       "slug": "neutral_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.7",
    //       "unicode_version": "0.7",
    //       "skin_tone_support": false
    //     },
    //     "😑": {
    //       "name": "expressionless face",
    //       "slug": "expressionless_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "😶": {
    //       "name": "face without mouth",
    //       "slug": "face_without_mouth",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🫥": {
    //       "name": "dotted line face",
    //       "slug": "dotted_line_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "14.0",
    //       "unicode_version": "14.0",
    //       "skin_tone_support": false
    //     },
    //     "😶‍🌫️": {
    //       "name": "face in clouds",
    //       "slug": "face_in_clouds",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "13.1",
    //       "unicode_version": "13.1",
    //       "skin_tone_support": false
    //     },
    //     "😏": {
    //       "name": "smirking face",
    //       "slug": "smirking_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😒": {
    //       "name": "unamused face",
    //       "slug": "unamused_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🙄": {
    //       "name": "face with rolling eyes",
    //       "slug": "face_with_rolling_eyes",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "😬": {
    //       "name": "grimacing face",
    //       "slug": "grimacing_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "😮‍💨": {
    //       "name": "face exhaling",
    //       "slug": "face_exhaling",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "13.1",
    //       "unicode_version": "13.1",
    //       "skin_tone_support": false
    //     },
    //     "🤥": {
    //       "name": "lying face",
    //       "slug": "lying_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "3.0",
    //       "unicode_version": "3.0",
    //       "skin_tone_support": false
    //     },
    //     "🫨": {
    //       "name": "shaking face",
    //       "slug": "shaking_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "15.0",
    //       "unicode_version": "15.0",
    //       "skin_tone_support": false
    //     },
    //     "😌": {
    //       "name": "relieved face",
    //       "slug": "relieved_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😔": {
    //       "name": "pensive face",
    //       "slug": "pensive_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😪": {
    //       "name": "sleepy face",
    //       "slug": "sleepy_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🤤": {
    //       "name": "drooling face",
    //       "slug": "drooling_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "3.0",
    //       "unicode_version": "3.0",
    //       "skin_tone_support": false
    //     },
    //     "😴": {
    //       "name": "sleeping face",
    //       "slug": "sleeping_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "😷": {
    //       "name": "face with medical mask",
    //       "slug": "face_with_medical_mask",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🤒": {
    //       "name": "face with thermometer",
    //       "slug": "face_with_thermometer",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🤕": {
    //       "name": "face with head-bandage",
    //       "slug": "face_with_head_bandage",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🤢": {
    //       "name": "nauseated face",
    //       "slug": "nauseated_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "3.0",
    //       "unicode_version": "3.0",
    //       "skin_tone_support": false
    //     },
    //     "🤮": {
    //       "name": "face vomiting",
    //       "slug": "face_vomiting",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "5.0",
    //       "unicode_version": "5.0",
    //       "skin_tone_support": false
    //     },
    //     "🤧": {
    //       "name": "sneezing face",
    //       "slug": "sneezing_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "3.0",
    //       "unicode_version": "3.0",
    //       "skin_tone_support": false
    //     },
    //     "🥵": {
    //       "name": "hot face",
    //       "slug": "hot_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "11.0",
    //       "unicode_version": "11.0",
    //       "skin_tone_support": false
    //     },
    //     "🥶": {
    //       "name": "cold face",
    //       "slug": "cold_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "11.0",
    //       "unicode_version": "11.0",
    //       "skin_tone_support": false
    //     },
    //     "🥴": {
    //       "name": "woozy face",
    //       "slug": "woozy_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "11.0",
    //       "unicode_version": "11.0",
    //       "skin_tone_support": false
    //     },
    //     "😵": {
    //       "name": "face with crossed-out eyes",
    //       "slug": "face_with_crossed_out_eyes",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😵‍💫": {
    //       "name": "face with spiral eyes",
    //       "slug": "face_with_spiral_eyes",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "13.1",
    //       "unicode_version": "13.1",
    //       "skin_tone_support": false
    //     },
    //     "🤯": {
    //       "name": "exploding head",
    //       "slug": "exploding_head",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "5.0",
    //       "unicode_version": "5.0",
    //       "skin_tone_support": false
    //     },
    //     "🤠": {
    //       "name": "cowboy hat face",
    //       "slug": "cowboy_hat_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "3.0",
    //       "unicode_version": "3.0",
    //       "skin_tone_support": false
    //     },
    //     "🥳": {
    //       "name": "partying face",
    //       "slug": "partying_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "11.0",
    //       "unicode_version": "11.0",
    //       "skin_tone_support": false
    //     },
    //     "🥸": {
    //       "name": "disguised face",
    //       "slug": "disguised_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "13.0",
    //       "unicode_version": "13.0",
    //       "skin_tone_support": false
    //     },
    //     "😎": {
    //       "name": "smiling face with sunglasses",
    //       "slug": "smiling_face_with_sunglasses",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🤓": {
    //       "name": "nerd face",
    //       "slug": "nerd_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🧐": {
    //       "name": "face with monocle",
    //       "slug": "face_with_monocle",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "5.0",
    //       "unicode_version": "5.0",
    //       "skin_tone_support": false
    //     },
    //     "😕": {
    //       "name": "confused face",
    //       "slug": "confused_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🫤": {
    //       "name": "face with diagonal mouth",
    //       "slug": "face_with_diagonal_mouth",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "14.0",
    //       "unicode_version": "14.0",
    //       "skin_tone_support": false
    //     },
    //     "😟": {
    //       "name": "worried face",
    //       "slug": "worried_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "🙁": {
    //       "name": "slightly frowning face",
    //       "slug": "slightly_frowning_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "☹️": {
    //       "name": "frowning face",
    //       "slug": "frowning_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.7",
    //       "unicode_version": "0.7",
    //       "skin_tone_support": false
    //     },
    //     "😮": {
    //       "name": "face with open mouth",
    //       "slug": "face_with_open_mouth",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "😯": {
    //       "name": "hushed face",
    //       "slug": "hushed_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "😲": {
    //       "name": "astonished face",
    //       "slug": "astonished_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😳": {
    //       "name": "flushed face",
    //       "slug": "flushed_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🥺": {
    //       "name": "pleading face",
    //       "slug": "pleading_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "11.0",
    //       "unicode_version": "11.0",
    //       "skin_tone_support": false
    //     },
    //     "🥹": {
    //       "name": "face holding back tears",
    //       "slug": "face_holding_back_tears",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "14.0",
    //       "unicode_version": "14.0",
    //       "skin_tone_support": false
    //     },
    //     "😦": {
    //       "name": "frowning face with open mouth",
    //       "slug": "frowning_face_with_open_mouth",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "😧": {
    //       "name": "anguished face",
    //       "slug": "anguished_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "😨": {
    //       "name": "fearful face",
    //       "slug": "fearful_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😰": {
    //       "name": "anxious face with sweat",
    //       "slug": "anxious_face_with_sweat",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😥": {
    //       "name": "sad but relieved face",
    //       "slug": "sad_but_relieved_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😢": {
    //       "name": "crying face",
    //       "slug": "crying_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😭": {
    //       "name": "loudly crying face",
    //       "slug": "loudly_crying_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😱": {
    //       "name": "face screaming in fear",
    //       "slug": "face_screaming_in_fear",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😖": {
    //       "name": "confounded face",
    //       "slug": "confounded_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😣": {
    //       "name": "persevering face",
    //       "slug": "persevering_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😞": {
    //       "name": "disappointed face",
    //       "slug": "disappointed_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😓": {
    //       "name": "downcast face with sweat",
    //       "slug": "downcast_face_with_sweat",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😩": {
    //       "name": "weary face",
    //       "slug": "weary_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😫": {
    //       "name": "tired face",
    //       "slug": "tired_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🥱": {
    //       "name": "yawning face",
    //       "slug": "yawning_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "12.0",
    //       "unicode_version": "12.0",
    //       "skin_tone_support": false
    //     },
    //     "😤": {
    //       "name": "face with steam from nose",
    //       "slug": "face_with_steam_from_nose",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😡": {
    //       "name": "enraged face",
    //       "slug": "enraged_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "😠": {
    //       "name": "angry face",
    //       "slug": "angry_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🤬": {
    //       "name": "face with symbols on mouth",
    //       "slug": "face_with_symbols_on_mouth",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "5.0",
    //       "unicode_version": "5.0",
    //       "skin_tone_support": false
    //     },
    //     "😈": {
    //       "name": "smiling face with horns",
    //       "slug": "smiling_face_with_horns",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "👿": {
    //       "name": "angry face with horns",
    //       "slug": "angry_face_with_horns",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "💀": {
    //       "name": "skull",
    //       "slug": "skull",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "☠️": {
    //       "name": "skull and crossbones",
    //       "slug": "skull_and_crossbones",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "1.0",
    //       "unicode_version": "1.0",
    //       "skin_tone_support": false
    //     },
    //     "💩": {
    //       "name": "pile of poo",
    //       "slug": "pile_of_poo",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "🤡": {
    //       "name": "clown face",
    //       "slug": "clown_face",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "3.0",
    //       "unicode_version": "3.0",
    //       "skin_tone_support": false
    //     },
    //     "👹": {
    //       "name": "ogre",
    //       "slug": "ogre",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    //     "👺": {
    //       "name": "goblin",
    //       "slug": "goblin",
    //       "group": "Smileys & Emotion",
    //       "emoji_version": "0.6",
    //       "unicode_version": "0.6",
    //       "skin_tone_support": false
    //     },
    // }
]

export default emoji_data;
