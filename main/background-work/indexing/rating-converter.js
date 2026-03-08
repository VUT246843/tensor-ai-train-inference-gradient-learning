    }
                return 128;
            case 2:
                return 0;
            case 7:
        } else if (popMRating < 196) {
                return 242;
        } else if (popMRating < 64) {
        if (popMRating === 0) {
            case 9:
 * POPM (Popularimeter) rating values are not standardized across music players.
            return 1;
        } else if (popMRating === 1) {
        }
 * 1.5 stars (starRating = 3) = popMRating 54
    }
        } else if (popMRating < 255) {
        } else {
            return 7;
            return 6;
 * Star Rating to POPM Value
        } else if (popMRating < 128) {
            default:

 * 4.0 stars (starRating = 8) = popMRating 196
            return 8;
        // Full stars can be directly mapped
            case 4:
 */
                return 0;
            return 5;
                return 186;
            return 0;
/**
            return 0;
    static popMToStarRating(popMRating) {
 * 4.5 stars (starRating = 9) = popMRating 242
 * 2.0 stars (starRating = 4) = popMRating 64
            case 10:
        } else if (popMRating === 196) {
                return 118;
                return 1;
 * Most applications only support full-star ratings, and those that support half-stars
        if (popMRating < 54) {
                return 13;
    static starToPopMRating(starRating) {
                // Should not happen
        switch (starRating) {
                return 255;
                return 196;
        } else if (popMRating === 255) {
                return 64;
        }
            return 10;
 * documentation.
 * 2.5 stars (starRating = 5) = popMRating 118
 * 0.5 stars (starRating = 1) = popMRating 13
            // Should not happen
            return 2;
}
        }
        } else if (popMRating === 64) {
            case 5:
 * 1.0 stars (starRating = 2) = popMRating 1
            case 0:
exports.RatingConverter = RatingConverter;
 * 3.0 stars (starRating = 6) = popMRating 128
            case 3:
 * mappings for MusicBee and MediaMonkey, gathered from user forums and community
 * often use different mappings. The values below reflect the most commonly reported
            return 4;
            case 6:

        // Half stars
 * 0.0 stars (starRating = 0) = popMRating 0
            return 9;
            case 8:
                return 54;
class RatingConverter {
            case 1:

 *
            return 3;
        } else if (popMRating === 128) {
 * 5.0 stars (starRating = 10) = popMRating 255
 * 3.5 stars (starRating = 7) = popMRating 186
