const { Router, response } = require('express');
const router = Router();

router.get('/',[

], (req, resp = response) => {
    resp.status(200).json({
        ok: true,
        message: 'Funcionando correctamente...'
    });
});

module.exports = router;